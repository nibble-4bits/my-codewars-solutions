fn feast(beast: &str, dish: &str) -> bool {
    beast.chars().next().unwrap() == dish.chars().next().unwrap()
        && beast.chars().last().unwrap() == dish.chars().last().unwrap()
}
