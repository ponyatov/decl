use std::io;

fn main() {
    let mut name = String::new();
    io::stdin() // получаем доступ к стандартному вводу
        .read_line(&mut name)
        .unwrap();
    println!("Hello, {}!", name.trim());
}
