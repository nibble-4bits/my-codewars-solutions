fn multiples(m: i32, n: f64) -> Vec<f64> {
    (1..=m).map(|num| (num as f64) * n).collect()
}