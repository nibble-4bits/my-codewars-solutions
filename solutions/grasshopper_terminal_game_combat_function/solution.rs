fn combat(health: f32, damage: f32) -> f32 {
    let new_health = health - damage;

    if new_health < 0.0 {
        0.0
    } else {
        new_health
    }
}
