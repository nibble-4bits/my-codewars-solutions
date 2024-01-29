#include <string>
#include <vector>
#include <unordered_map>
#include <functional>
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

void execute_mov_operation(const std::string &instruction, std::unordered_map<std::string, int> &registers, size_t &ins_p)
{
    const std::string operands{instruction.substr(instruction.find(' ') + 1)};
    const std::string operand1{operands.substr(0, operands.find(' '))};
    const std::string operand2{operands.substr(operands.find(' ') + 1)};

    if (is_alpha_string(operand2))
    {
        registers[operand1] = registers[operand2];
    }
    else if (is_digit_string(operand2))
    {
        registers[operand1] = std::stoi(operand2);
    }

    ++ins_p;
}

void execute_inc_operation(const std::string &instruction, std::unordered_map<std::string, int> &registers, size_t &ins_p)
{
    const std::string operands{instruction.substr(instruction.find(' ') + 1)};
    const std::string operand1{operands.substr(0, operands.find(' '))};

    ++registers[operand1];
    ++ins_p;
}

void execute_dec_operation(const std::string &instruction, std::unordered_map<std::string, int> &registers, size_t &ins_p)
{
    const std::string operands{instruction.substr(instruction.find(' ') + 1)};
    const std::string operand1{operands.substr(0, operands.find(' '))};

    --registers[operand1];
    ++ins_p;
}

void execute_jnz_operation(const std::string &instruction, std::unordered_map<std::string, int> &registers, size_t &ins_p)
{
    const std::string operands{instruction.substr(instruction.find(' ') + 1)};
    const std::string operand1{operands.substr(0, operands.find(' '))};
    const std::string operand2{operands.substr(operands.find(' ') + 1)};

    if (is_alpha_string(operand1) && registers[operand1])
    {
        if (is_alpha_string(operand2))
        {
            ins_p += registers[operand2];
        }
        else if (is_digit_string(operand2))
        {
            ins_p += std::stoi(operand2);
        }
    }
    else if (is_digit_string(operand1) && std::stoi(operand1))
    {
        if (is_alpha_string(operand2))
        {
            ins_p += registers[operand2];
        }
        else if (is_digit_string(operand2))
        {
            ins_p += std::stoi(operand2);
        }
    }
    else
    {
        ++ins_p;
    }
}

using OperationHandler = std::function<void(const std::string &, std::unordered_map<std::string, int> &, size_t &)>;

OperationHandler get_instruction_handler(const std::string &instruction)
{
    static const std::unordered_map<std::string, OperationHandler> handlers{
        {"mov", execute_mov_operation},
        {"inc", execute_inc_operation},
        {"dec", execute_dec_operation},
        {"jnz", execute_jnz_operation}};

    const std::string operation{instruction.substr(0, instruction.find(' '))};

    return handlers.at(operation);
}

std::unordered_map<std::string, int> assembler(const std::vector<std::string> &program)
{
    std::unordered_map<std::string, int> registers{};
    size_t ins_p{0}; // instruction pointer

    while (ins_p < program.size())
    {
        std::string instruction{program[ins_p]};
        auto handler{get_instruction_handler(instruction)};
        handler(instruction, registers, ins_p);
    }

    return registers;
}