fn points(games: &[String]) -> u32 {
    games.iter().fold(0, |acc, score_str| {
        let scores: Vec<&str> = score_str.split(':').collect();

        if scores[0] > scores[1] {
            acc + 3
        } else if scores[0] < scores[1] {
            acc
        } else {
            acc + 1
        }
    })
}