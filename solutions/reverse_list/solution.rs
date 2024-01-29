fn reverse_list(lst: &[i32]) -> Vec<i32> {
    lst.iter().rev().copied().collect()
}
