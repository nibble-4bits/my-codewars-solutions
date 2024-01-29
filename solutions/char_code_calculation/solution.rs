fn calc(s: &str) -> u32 {
    let total1 = s
        .bytes()
        .map(|c| c.to_string())
        .collect::<Vec<String>>()
        .join("");

    let total2 = total1.clone().replace("7", "1");

    total1
        .chars()
        .fold(0, |acc, n| acc + n.to_digit(10).unwrap())
        - total2
            .chars()
            .fold(0, |acc, n| acc + n.to_digit(10).unwrap())
}