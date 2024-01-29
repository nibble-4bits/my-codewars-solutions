#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <algorithm>
#include <regex>

bool is_alpha_string(const std::string &str)
{
    static std::regex reg{"^[A-Za-z]+$"};
    return std::regex_match(str, reg);
}

bool is_digit_string(const std::string &str)
{
    static std::regex reg{"^-?\\d+$"};
    return std::regex_match(str, reg);
}

bool is_label(const std::string &str)
{
    static std::regex reg{"^\\w+?:$"};
    return std::regex_match(str, reg);
}

bool is_string_literal(const std::string &str)
{
    static std::regex reg{"^'.*'$"};
    return std::regex_match(str, reg);
}

std::string get_operation(const std::string &instruction)
{
    return instruction.substr(0, instruction.find_first_of(' '));
}

std::vector<std::string> get_operands(const std::string &instruction)
{
    std::vector<std::string> operands{};

    auto first_space_idx{instruction.find_first_of(' ')};
    if (first_space_idx == std::string::npos)
    {
        return operands;
    }

    auto a{instruction.substr(first_space_idx)};
    auto first_operand_idx{a.find_first_not_of(' ') + first_space_idx};

    int apostropheCount{0};
    std::string partial_operand{};
    for (size_t i = first_operand_idx; i < instruction.size(); i++)
    {
        char c = instruction[i];
        if (c == '\'')
        {
            partial_operand += c;
            if (apostropheCount == 1)
            {
                --apostropheCount;
            }
            else
            {
                ++apostropheCount;
            }
        }
        else if (c == ',' && apostropheCount == 0)
        {
            operands.push_back(partial_operand);
            partial_operand = "";
        }
        else if (c == ' ' && apostropheCount == 0)
        {
            continue;
        }
        else
        {
            partial_operand += c;
        }

        if (i == instruction.size() - 1)
        {
            operands.push_back(partial_operand);
        }
    }

    return operands;
}

void trim_string(std::string &str)
{
    // Remove leading spaces
    auto it_lspaces = std::find_if(str.begin(), str.end(), [](char c)
                                   { return c != ' '; });
    str.erase(str.begin(), it_lspaces);

    // Remove everything starting from ';'
    auto it_semicolon = std::find_if(str.begin(), str.end(), [](char c)
                                     { return c == ';'; });
    str.erase(it_semicolon, str.end());

    // Remove trailing spaces
    auto it_tspaces = std::find_if(str.rbegin(), str.rend(), [](char c)
                                   { return c != ' '; });
    str.erase(it_tspaces.base(), str.end());
}

class Assembler
{
private:
    using OperationHandler = void (Assembler::*)(const std::vector<std::string> &);

    size_t m_pc{};
    std::vector<std::string> m_instructions{};
    std::unordered_map<std::string, int> m_registers{};
    std::unordered_map<std::string, size_t> m_labels{};
    std::stack<size_t> prev_pc{};
    std::string m_output{};
    int comp_val_1{};
    int comp_val_2{};
    bool m_program_ended{};

    int get_value_from_operand(const std::string &operand)
    {
        if (is_digit_string(operand))
        {
            return std::stoi(operand);
        }

        return m_registers[operand];
    }

    void execute_mov_operation(const std::vector<std::string> &operands)
    {
        m_registers[operands[0]] = get_value_from_operand(operands[1]);
        ++m_pc;
    }

    void execute_inc_operation(const std::vector<std::string> &operands)
    {
        ++m_registers[operands[0]];
        ++m_pc;
    }

    void execute_dec_operation(const std::vector<std::string> &operands)
    {
        --m_registers[operands[0]];
        ++m_pc;
    }

    void execute_add_operation(const std::vector<std::string> &operands)
    {
        m_registers[operands[0]] += get_value_from_operand(operands[1]);
        ++m_pc;
    }

    void execute_sub_operation(const std::vector<std::string> &operands)
    {
        m_registers[operands[0]] -= get_value_from_operand(operands[1]);
        ++m_pc;
    }

    void execute_mul_operation(const std::vector<std::string> &operands)
    {
        m_registers[operands[0]] *= get_value_from_operand(operands[1]);
        ++m_pc;
    }

    void execute_div_operation(const std::vector<std::string> &operands)
    {
        m_registers[operands[0]] /= get_value_from_operand(operands[1]);
        ++m_pc;
    }

    void execute_jmp_operation(const std::vector<std::string> &operands)
    {
        m_pc = m_labels.at(operands[0]) + 1;
    }

    void execute_cmp_operation(const std::vector<std::string> &operands)
    {
        comp_val_1 = get_value_from_operand(operands[0]);
        comp_val_2 = get_value_from_operand(operands[1]);
        ++m_pc;
    }

    void execute_jne_operation(const std::vector<std::string> &operands)
    {
        if (comp_val_1 != comp_val_2)
        {
            m_pc = m_labels.at(operands[0]) + 1;
        }
        else
        {
            ++m_pc;
        }
    }

    void execute_je_operation(const std::vector<std::string> &operands)
    {
        if (comp_val_1 == comp_val_2)
        {
            m_pc = m_labels.at(operands[0]) + 1;
        }
        else
        {
            ++m_pc;
        }
    }

    void execute_jge_operation(const std::vector<std::string> &operands)
    {
        if (comp_val_1 >= comp_val_2)
        {
            m_pc = m_labels.at(operands[0]) + 1;
        }
        else
        {
            ++m_pc;
        }
    }

    void execute_jg_operation(const std::vector<std::string> &operands)
    {
        if (comp_val_1 > comp_val_2)
        {
            m_pc = m_labels.at(operands[0]) + 1;
        }
        else
        {
            ++m_pc;
        }
    }

    void execute_jle_operation(const std::vector<std::string> &operands)
    {
        if (comp_val_1 <= comp_val_2)
        {
            m_pc = m_labels.at(operands[0]) + 1;
        }
        else
        {
            ++m_pc;
        }
    }

    void execute_jl_operation(const std::vector<std::string> &operands)
    {
        if (comp_val_1 < comp_val_2)
        {
            m_pc = m_labels.at(operands[0]) + 1;
        }
        else
        {
            ++m_pc;
        }
    }

    void execute_call_operation(const std::vector<std::string> &operands)
    {
        prev_pc.push(m_pc);
        m_pc = m_labels.at(operands[0]) + 1;
    }

    void execute_ret_operation(const std::vector<std::string> &operands)
    {
        m_pc = prev_pc.top() + 1;
        prev_pc.pop();
    }

    void execute_msg_operation(const std::vector<std::string> &operands)
    {
        for (const auto &operand : operands)
        {
            if (is_string_literal(operand))
            {
                m_output += operand.substr(1, operand.size() - 2);
            }
            else
            {
                m_output += std::to_string(get_value_from_operand(operand));
            }
        }

        ++m_pc;
    }

    void execute_end_operation(const std::vector<std::string> &operands)
    {
        m_program_ended = true;
    }

    inline static const std::unordered_map<std::string, OperationHandler> handlers{
        {"mov", &Assembler::execute_mov_operation},
        {"inc", &Assembler::execute_inc_operation},
        {"dec", &Assembler::execute_dec_operation},
        {"add", &Assembler::execute_add_operation},
        {"sub", &Assembler::execute_sub_operation},
        {"mul", &Assembler::execute_mul_operation},
        {"div", &Assembler::execute_div_operation},
        {"jmp", &Assembler::execute_jmp_operation},
        {"cmp", &Assembler::execute_cmp_operation},
        {"jne", &Assembler::execute_jne_operation},
        {"je", &Assembler::execute_je_operation},
        {"jge", &Assembler::execute_jge_operation},
        {"jg", &Assembler::execute_jg_operation},
        {"jle", &Assembler::execute_jle_operation},
        {"jl", &Assembler::execute_jl_operation},
        {"call", &Assembler::execute_call_operation},
        {"ret", &Assembler::execute_ret_operation},
        {"msg", &Assembler::execute_msg_operation},
        {"end", &Assembler::execute_end_operation},
    };

public:
    Assembler(const std::string &program)
    {
        std::istringstream ss{program};
        std::string line{};

        for (size_t i = 0; std::getline(ss, line);)
        {
            trim_string(line);

            if (line.empty())
                continue;

            if (is_label(line))
            {
                m_labels[line.substr(0, line.find(':'))] = i;
            }

            m_instructions.push_back(line);
            ++i;
        }
    }

    std::string run()
    {
        while (m_pc < m_instructions.size() && !m_program_ended)
        {
            const auto instruction{m_instructions[m_pc]};
            const auto operation{get_operation(instruction)};
            const auto operands{get_operands(instruction)};

            if (is_label(operation))
            {
                ++m_pc;
                continue;
            }

            (this->*handlers.at(operation))(operands);
        }

        if (m_program_ended)
        {
            return m_output;
        }

        return "-1";
    }
};

std::string assembler_interpreter(const std::string &program)
{
    Assembler assembler{program};

    return assembler.run();
}