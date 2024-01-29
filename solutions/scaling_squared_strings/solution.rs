fn scale_horizontal(v: &mut Vec<String>, k: usize) {
    for line in v {
        for i in (0..line.len() * k).step_by(k) {
            for _ in 0..k - 1 {
                line.insert_str(i, &line[i..i + 1].to_string());
            }
        }
    }
}

fn scale_vertical(v: &mut Vec<String>, n: usize) {
    for i in (0..v.len() * n).step_by(n) {
        for _ in 0..n - 1 {
            v.insert(i, v[i].to_string());
        }
    }
}

fn scale(s: &str, k: u32, n: u32) -> String {
    let mut vec_str = s
        .split_ascii_whitespace()
        .map(|s| s.to_string())
        .collect::<Vec<String>>();

    scale_horizontal(&mut vec_str, k as usize);
    scale_vertical(&mut vec_str, n as usize);

    vec_str.join("\n")
}