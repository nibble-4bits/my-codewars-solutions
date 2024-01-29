use std::collections::HashMap;

fn freq_seq(s: &str, sep: &str) -> String {
    let mut map = HashMap::new();

    s.chars().for_each(|c| {
        map.entry(c).and_modify(|v| *v += 1).or_insert(1);
    });

    s.chars()
        .map(|c| map.get(&c).unwrap().to_string())
        .collect::<Vec<_>>()
        .join(sep)
}