fn alternate<'a>(n: usize, first_value: &'a str, second_value: &'a str) -> Vec<&'a str> {
    (0..n)
        .map(|n| {
            if n % 2 == 0 {
                first_value
            } else {
                second_value
            }
        })
        .collect()
}
