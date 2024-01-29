fn pairs(arr: &Vec<i32>) -> usize {
    arr.chunks_exact(2)
        .filter(|pair| pair[1] == pair[0] + 1 || pair[0] == pair[1] + 1)
        .count()
}