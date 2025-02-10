const holaMundo = require("../src/index");

test("Devuelve ¡Hola, mundo!", () => {
    expect(holaMundo()).toBe("¡Hola, mundo!");
});
