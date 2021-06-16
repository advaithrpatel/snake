let Snake = game.createSprite(5, 2)
basic.forever(function () {
    if (game.isPaused()) {
        basic.pause(10000)
        game.gameOver()
    }
    if (input.buttonIsPressed(Button.A)) {
        game.pause()
    }
    if (input.buttonIsPressed(Button.B)) {
        game.resume()
    }
    if (input.isGesture(Gesture.LogoUp)) {
        Snake.change(LedSpriteProperty.Y, -1)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        Snake.change(LedSpriteProperty.Y, 1)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        Snake.change(LedSpriteProperty.X, 1)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        Snake.change(LedSpriteProperty.X, -1)
    }
    if (game.isGameOver()) {
        Snake = game.createSprite(5, 2)
    }
})
