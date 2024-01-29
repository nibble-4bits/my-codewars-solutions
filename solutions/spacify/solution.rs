fn spacify(s: &str) -> String {
    s.char_indices()
        .map(|(i, c)| {
            if i < s.len() - 1 {
                format!("{} ", c)
            } else {
                c.to_string()
            }
        })
        .collect::<String>()
}