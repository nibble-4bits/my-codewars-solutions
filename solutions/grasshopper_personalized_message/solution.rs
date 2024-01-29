fn greet(name: &str, owner: &str) -> String {
    match name {
        s if s == owner => String::from("Hello boss"),
        _ => String::from("Hello guest"),
    }
}
