# ![logo][vscode/logo.png] `decl` 0.0.1
## declarative DSL into Embedded C++ translator

(c) Dmitry Ponyatov <<dponyatov@gmail.com>> 2026 MIT

github: https://github.com/ponyatov/decl

## Overview

`decl` is a high-level declarative DSL translator that converts literal
programming and specification files into human-readable embedded C++ code using
AI-assisted translation. It targets heterogeneous clusters of multi-platform
nodes including Linux (x86, RPi3+), Cortex-M microcontrollers, and ESP32C/ESP32S
devices.

## Features

- Rich DSL syntax combining the best from Python, Elixir, and OCaml/F#
- Actor model with threads and async messaging
- Pattern matching for elegant code
- Class-based OOP with inheritance and polymorphism
- Cross-node messaging with automatic serialization/deserialization
- Multi-platform support from high-end Linux to resource-constrained MCUs

## Philosophy

Instead of traditional compilation, `decl` uses **literal programming** principles:

- Every `.md` file is a `decl` module (Markdown + Decl code)
- AI-assisted translation generates human-readable **Embedded C++**
- Documentation and code live together
