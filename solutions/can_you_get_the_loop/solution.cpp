int getLoopSize(Node *startNode)
{
    std::unordered_map<Node *, int> map{};

    for (int i{0};; ++i)
    {
        auto foundNode = map.find(startNode->getNext());
        if (foundNode != map.cend())
        {
            if (foundNode->first == startNode) return 1;
            return i - foundNode->second + 1;
        }

        map.insert(std::make_pair(startNode, i));
        startNode = startNode->getNext();
    }
}