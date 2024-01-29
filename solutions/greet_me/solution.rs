fn greet(name: &str) -> String {
    let mut name = name.to_string().to_lowercase();
    name.replace_range(0..1, name[0..1].to_uppercase().as_str());

    format!("Hello {}!", name)
}