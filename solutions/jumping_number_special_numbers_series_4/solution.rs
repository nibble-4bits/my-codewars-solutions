fn jumping_number(n: u64) -> String {
    match n
        .to_string()
        .chars()
        .map(|v| v.to_digit(10).unwrap() as i32)
        .collect::<Vec<_>>()
        .windows(2)
        .all(|v| v[1] == v[0] + 1 || v[1] == v[0] - 1)
    {
        true => String::from("Jumping!!"),
        false => String::from("Not!!"),
    }
}