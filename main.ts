scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite == p1) {
        scene.cameraShake(4, 200)
        speed1 = speed1 / 1.1
    } else if (sprite == p2) {
        scene.cameraShake(4, 200)
        speed2 = speed2 / 1.1
    }
})
function start_lights (color: Image) {
    for (let index = 0; index <= 10; index++) {
        for (let index_2 = 0; index_2 <= 5; index_2++) {
            tiles.setTileAt(tiles.getTileLocation(index + 1, index_2 + 88), color)
        }
    }
}
function turningimageP1 (vx: number, vy: number) {
    if (Math.abs(vx) > Math.abs(vy)) {
        if (vx >= 1) {
            p1.setImage(img`
                ....................
                ....2222222222......
                ...2422222222c2.....
                ..2c422222222cc2....
                .2cc444444422cc42d..
                .2cc444444422cc42d..
                .2c2eeeeeeeeebc422..
                .22ebbbebbbeeeb422..
                .2ebbbbebbbbbe2222..
                .ee2222e222222e222..
                .ee2222e222222e222..
                .eeeeeeefeeeefe2dd..
                .eeeeeeefeeffeee2d..
                .eeeeeeefffeeeeeee..
                .eeeeeeefffeeeeeee..
                .efffffeeeeffffeee..
                ..ffffffeeffffffe...
                ...ffff....fffff....
                ....................
                ....................
                `)
        } else if (vx <= -1) {
            p1.setImage(img`
                ....................
                ......2222222222....
                .....2c2222222242...
                ....2cc222222224c2..
                ..d24cc224444444cc2.
                ..d24cc224444444cc2.
                ..224cbeeeeeeeee2c2.
                ..224beeebbbebbbe22.
                ..2222ebbbbbebbbbe2.
                ..222e222222e2222ee.
                ..222e222222e2222ee.
                ..dd2efeeeefeeeeeee.
                ..d2eeeffeefeeeeeee.
                ..eeeeeeefffeeeeeee.
                ..eeeeeeefffeeeeeee.
                ..eeeffffeeeefffffe.
                ...effffffeeffffff..
                ....fffff....ffff...
                ....................
                ....................
                `)
        }
    } else {
        if (vy >= 1) {
            p1.setImage(img`
                . . . . . . e e c c e e . . . . 
                . . . . . e 2 2 2 2 2 2 e . . . 
                . . . . 2 c 2 2 2 2 2 2 c 2 . . 
                . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                . . . f 2 2 4 2 2 2 2 2 c 2 f . 
                . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                . . . f 2 2 4 2 2 2 2 2 2 2 f . 
                . . . f 2 c 2 4 4 2 2 2 c 2 f . 
                . . . e 2 c e c c c c e c 2 e . 
                . . . e 2 e c b b b b c e 2 e . 
                . . . e 2 e b b b b b b e 2 e . 
                . . . e e e e e e e e e e e e . 
                . . . f e e b e e e e b e e f . 
                . . . f e b b e e e e b b e f . 
                . . . f f e e e e e e e e f f . 
                . . . . f f . . . . . . f f . . 
                `)
        } else if (vy <= -1) {
            p1.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 2 . . . . 
                . . . . . 2 2 4 4 2 2 2 2 . . . 
                . . . . . c 4 2 2 2 2 2 c . . . 
                . . . . 2 c 4 2 2 2 2 2 c 2 . . 
                . . . e 2 c 4 2 2 2 2 2 c 2 e . 
                . . . f 2 c 4 2 2 2 2 2 c 2 f . 
                . . . f e c 2 2 2 2 2 2 c e f . 
                . . . f 2 c 2 b b b b 2 c 2 f . 
                . . . e 2 2 b c c c c b 2 2 e . 
                . . . e e b c c c c c c b e e . 
                . . . f e 4 4 4 4 4 4 4 4 e f . 
                . . . f e d 2 2 2 2 2 2 d e f . 
                . . . . 2 d d 2 2 2 2 d d 2 f . 
                . . . . f 2 d 2 2 2 2 d 2 f . . 
                . . . . . e 2 2 2 2 2 2 e . . . 
                `)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.splash(info.getTimeElapsed())
})
function movep1 () {
    if (controller.player1.isPressed(ControllerButton.Right)) {
        cardirectionp1 += turn_speed * (1 - speed1 / (2 * maxspeed))
    }
    if (controller.player1.isPressed(ControllerButton.Left)) {
        cardirectionp1 += 0 - turn_speed * (1 - speed1 / (2 * maxspeed))
    }
    if (controller.player1.isPressed(ControllerButton.Up)) {
        accelerationp1 = 2
    } else if (controller.player1.isPressed(ControllerButton.Down)) {
        accelerationp1 = -2
    } else {
        accelerationp1 = -0.5
    }
    speed1 = Math.constrain(speed1 + accelerationp1, 0, maxspeed)
    p1.sayText("" + Math.round(speed1) + " mph")
    p1.vx = Math.cos(cardirectionp1) * speed1
    p1.vy = Math.sin(cardirectionp1) * speed1
    turningimageP1(p1.vx, p1.vy)
}
function turningimageP2 (vx: number, vy: number) {
    if (Math.abs(vx) > Math.abs(vy)) {
        if (vx >= 1) {
            p2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 6 6 6 6 6 6 6 . . . . 
                . . . 6 9 6 6 6 6 6 6 c 6 . . . 
                . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
                . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
                . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
                . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
                . 6 8 b b b 8 b b b b 8 6 6 6 6 
                . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
                . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
                . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
                . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
                . 8 f f f f 8 8 8 8 f f f 8 8 8 
                . . f f f f f 8 8 f f f f f 8 . 
                . . . f f f . . . . f f f f . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (vx <= -1) {
            p2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 6 6 6 6 . . 
                . . . . . 6 c 6 6 6 6 6 6 9 6 . 
                . . . . 6 c c 6 6 6 6 6 6 9 c 6 
                . . d 6 9 c c 6 9 9 9 9 9 9 c c 
                . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
                . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
                . 6 6 6 6 6 8 b b b b 8 b b b 8 
                . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
                . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
                . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
                . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
                . 8 8 8 8 f f f 8 8 8 8 f f f f 
                . . . 8 f f f f f 8 8 f f f f f 
                . . . . f f f f . . . . f f f . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    } else {
        if (vy >= 1) {
            p2.setImage(img`
                . . . . . . 8 8 c c 8 8 . . . . 
                . . . . . 8 6 6 6 6 6 6 8 . . . 
                . . . . 6 c 6 6 6 6 6 6 c 6 . . 
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
                . . . f 6 6 9 6 6 6 6 6 c 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 6 9 6 6 6 6 6 6 6 f . 
                . . . f 6 c 6 9 9 6 6 6 c 6 f . 
                . . . 8 6 c 8 c c c c 8 c 6 8 . 
                . . . 8 6 8 c b b b b c 8 6 8 . 
                . . . 8 6 8 b b b b b b 8 6 8 . 
                . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . . f 8 8 a 8 8 8 8 a 8 8 f . 
                . . . f 8 a a 8 8 8 8 a a 8 f . 
                . . . f f 8 8 8 8 8 8 8 8 f f . 
                . . . . f f . . . . . . f f . . 
                `)
        } else if (vy <= -1) {
            p2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 6 6 . . . . 
                . . . . . 6 6 9 9 6 6 6 6 . . . 
                . . . . . c 9 6 6 6 6 6 c . . . 
                . . . . 6 c 9 6 6 6 6 6 c 6 . . 
                . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
                . . . f 6 c 9 6 6 6 6 6 c 6 f . 
                . . . f 8 c 6 6 6 6 6 6 c 8 f . 
                . . . f 6 c 6 b b b b 6 c 6 f . 
                . . . 8 6 6 b c c c c b 6 6 8 . 
                . . . 8 8 b c c c c c c b 8 8 . 
                . . . f 8 9 9 9 9 9 9 9 9 8 f . 
                . . . f 8 d 6 6 6 6 6 6 d 8 f . 
                . . . . 6 d d 6 6 6 6 d d 6 f . 
                . . . . f 6 d 6 6 6 6 d 6 f . . 
                . . . . . 8 6 6 6 6 6 6 8 . . . 
                `)
        }
    }
}
function movep2 () {
    if (controller.player2.isPressed(ControllerButton.Right)) {
        cardirectionp2 += turn_speed * (1 - speed2 / (2 * maxspeed))
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        cardirectionp2 += 0 - turn_speed * (1 - speed2 / (2 * maxspeed))
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        accelerationp2 = 2
    } else if (controller.player2.isPressed(ControllerButton.Down)) {
        accelerationp2 = -2
    } else {
        accelerationp2 = -0.5
    }
    speed2 = Math.constrain(speed2 + accelerationp2, 0, maxspeed)
    p2.sayText("" + Math.round(speed2) + " mph")
    p2.vx = Math.cos(cardirectionp2) * speed2
    p2.vy = Math.sin(cardirectionp2) * speed2
    turningimageP2(p2.vx, p2.vy)
}
function SpawningEnemies (Difficulty: number) {
    if (Difficulty == 1) {
        for (let index = 0; index < 50; index++) {
            EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
            tiles.placeOnTile(EnemySprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length - 1)))
        }
    } else {
        for (let index = 0; index < 200; index++) {
            EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
            tiles.placeOnTile(EnemySprite, SpawnLocation.removeAt(randint(0, SpawnLocation.length - 1)))
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.image == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).image) {
        speed1 = speed1 / 2
        p1.setVelocity(0, 0)
        sprites.destroy(otherSprite, effects.bubbles, 200)
    } else {
        speed2 = speed2 / 2
        p2.setVelocity(0, 0)
        sprites.destroy(otherSprite, effects.bubbles, 200)
    }
})
let EnemySprite: Sprite = null
let accelerationp2 = 0
let cardirectionp2 = 0
let accelerationp1 = 0
let cardirectionp1 = 0
let speed2 = 0
let speed1 = 0
let p2: Sprite = null
let p1: Sprite = null
let maxspeed = 0
let turn_speed = 0
let EnemyImages: Image[] = []
let SpawnLocation: tiles.Location[] = []
game.splash("off brand car game")
game.splash("red car controls : ←→↑↓")
game.splash("blue car controls : IJKL")
let Difficulty = game.askForNumber("1 for easy or 2 for hard", 1)
tiles.setCurrentTilemap(tilemap`map`)
SpawnLocation = tiles.getTilesByType(assets.tile`myTile2`)
EnemyImages = [
img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `,
img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `,
img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 4 c c 3 3 3 3 3 c 
    c 5 5 4 5 5 4 c 5 5 c 3 3 3 c . 
    b 5 4 b 4 4 4 c 5 5 5 b c c . . 
    c 4 5 5 b 4 4 c 5 5 5 c b b . . 
    c 5 5 5 c 4 c 5 5 5 5 c c 5 b . 
    c 5 5 5 5 c 4 c c c c c c 5 c . 
    . c c c c c c . . . . . c c c . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `
]
SpawningEnemies(Difficulty)
turn_speed = 0.1
maxspeed = 200
let start_lights2 = tiles.getTilesByType(assets.tile`myTile4`)
let count = 0
timer.after(0, function () {
    start_lights(assets.tile`myTile4`)
})
timer.after(1000, function () {
    start_lights(assets.tile`myTile5`)
})
timer.after(2000, function () {
    start_lights(assets.tile`myTile7`)
})
timer.after(3000, function () {
    info.startCountup()
    start_lights(assets.tile`myTile2`)
    if (count < 1) {
        movep1()
        movep2()
        count += 1
    }
})
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 380
    export const ARCADE_SCREEN_HEIGHT = 300
}
mp.setPlayerIndicatorsVisible(false)
p1 = sprites.create(img`
    .......eeecceee.....
    ......e22222222e....
    .....2c22222222c2...
    ....e2c42222222c2e..
    ....f2242222222c2f..
    ....f2242222222c2f..
    ....f224222222222f..
    ....f224222222222f..
    ....f2c24442222c2f..
    ....e2ceccccceec2e..
    ....e2ceccccceec2e..
    ....e2ecbbbbbcce2e..
    ....e2ebbbbbbbbe2e..
    ....eeeeeeeeeeeeee..
    ....fedeeeeeeeedef..
    ....fedeeeeeeeedef..
    ....fe2deeeeedd2ef..
    ....ffeeeeeeeeeeff..
    .....ff........ff...
    ....................
    `, SpriteKind.Player)
p2 = sprites.create(img`
    ......888cc888......
    .....8666666668.....
    ....6c66666666c6....
    ...86c99666666c68...
    ...f6699666666c6f...
    ...f669966666666f...
    ...f669966666666f...
    ...f669966666666f...
    ...f6c66996666c6f...
    ...86c88cccc88c68...
    ...868ccbbbbcc868...
    ...868bbbbbbbb868...
    ...868bbbbbbbb868...
    ...88888888888888...
    ...f8d88888888d8f...
    ...f86dd8888dd68f...
    ...ff8888888888ff...
    ....ff........ff....
    ....................
    ....................
    `, SpriteKind.Player)
tiles.placeOnTile(p1, tiles.getTileLocation(8, 96))
tiles.placeOnTile(p2, tiles.getTileLocation(2, 96))
p1.setImage(img`
    .......eeecceee.....
    ......e22222222e....
    .....2c22222222c2...
    ....e2c42222222c2e..
    ....f2242222222c2f..
    ....f2242222222c2f..
    ....f224222222222f..
    ....f224222222222f..
    ....f2c24442222c2f..
    ....e2ceccccceec2e..
    ....e2ceccccceec2e..
    ....e2ecbbbbbcce2e..
    ....e2ebbbbbbbbe2e..
    ....eeeeeeeeeeeeee..
    ....fedeeeeeeeedef..
    ....fedeeeeeeeedef..
    ....fe2deeeeedd2ef..
    ....ffeeeeeeeeeeff..
    .....ff........ff...
    ....................
    `)
p2.setImage(img`
    ......888cc888......
    .....8666666668.....
    ....6c66666666c6....
    ...86c99666666c68...
    ...f6699666666c6f...
    ...f669966666666f...
    ...f669966666666f...
    ...f669966666666f...
    ...f6c66996666c6f...
    ...86c88cccc88c68...
    ...868ccbbbbcc868...
    ...868bbbbbbbb868...
    ...868bbbbbbbb868...
    ...88888888888888...
    ...f8d88888888d8f...
    ...f86dd8888dd68f...
    ...ff8888888888ff...
    ....ff........ff....
    ....................
    ....................
    `)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, p1)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, p2)
p1.setBounceOnWall(true)
p2.setBounceOnWall(true)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), p1)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), p2)
game.onUpdate(function () {
    if (count >= 1) {
        movep1()
        movep2()
    }
})
