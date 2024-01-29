fn max_tri_sum(arr: &[i32]) -> i32 {
    let mut sorted = arr.to_owned();

    sorted.sort_by(|a, b| b.cmp(a));
    sorted.dedup();

    sorted.iter().take(3).sum()
}
