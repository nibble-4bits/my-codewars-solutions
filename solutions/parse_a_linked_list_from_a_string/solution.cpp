#include <vector>
#include <string>

// Credits for `split` function to https://stackoverflow.com/a/46931770
std::vector<std::string> split(const std::string &s, const std::string &delimiter)
{
    size_t pos_start = 0, pos_end, delim_len = delimiter.length();
    std::string token;
    std::vector<std::string> res;

    while ((pos_end = s.find(delimiter, pos_start)) != std::string::npos)
    {
        token = s.substr(pos_start, pos_end - pos_start);
        pos_start = pos_end + delim_len;
        res.push_back(token);
    }

    res.push_back(s.substr(pos_start));
    return res;
}

Node *parse(const std::string &s)
{
    Node *list{nullptr};
    Node *prev_node{nullptr};
    auto str_nodes = split(s, " -> ");

    for (int i = str_nodes.size() - 1; i >= 0; --i)
    {
        if (str_nodes[i] != "nullptr")
        {
            list = new Node(std::stoi(str_nodes[i]), prev_node);
            prev_node = list;
        }
    }

    return list;
}