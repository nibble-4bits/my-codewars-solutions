fn automorphic(n: u64) -> String {
    match n.to_string()
        == n.pow(2)
            .to_string()
            .chars()
            .rev()
            .take(n.to_string().len())
            .collect::<String>()
            .chars()
            .rev()
            .collect::<String>()
    {
        true => String::from("Automorphic"),
        false => String::from("Not!!"),
    }
}