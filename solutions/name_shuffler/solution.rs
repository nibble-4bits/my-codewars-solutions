fn name_shuffler(s: &str) -> String {
    s.split_whitespace().rev().collect::<Vec<_>>().join(" ")
}