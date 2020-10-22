namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const KillerNPC = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    game.splash("Shop keeper: Welcome good sir would you like a battle? No. TOO BAD!")
    tiles.setTilemap(tilemap`level`)
    mySprite.setPosition(100, 100)
    mySprite4.destroy()
    Killer_npc_1 = sprites.create(img`
        ......ffff.............
        ....fff22fff...........
        ...fff2222fff..........
        ..fffeeeeeefff.........
        ..ffe222222eef.........
        ..fe2ffffff2ef.........
        ..ffffeeeeffff......ccc
        .ffefbf44fbfeff....cddc
        .ffefbf44fbfeff...cddc.
        .fee4dddddd4eef.ccddc..
        fdfeeddddd4eeffecddc...
        fbffee4444ee4fddccc....
        fbf4f222222f1edde......
        fcf.f222222f44ee.......
        .ff.f445544f...........
        ....ffffffff...........
        .....ff..ff............
        `, SpriteKind.KillerNPC)
    Killer_npc_1.follow(mySprite)
    Killer_npc_1.setPosition(200, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KillerNPC, function (sprite, otherSprite) {
    Killer_npc_1.destroy()
    info.changeLifeBy(-1)
    game.splash("BETA IS OVER")
    game.splash("Game will reset")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite3.destroy()
    info.setLife(2)
    tiles.setTilemap(tilemap`level_0`)
    mySprite.setPosition(100, 80)
    game.splash("What was that?")
    game.splash("I better go to the store")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level_1`)
    mySprite.setPosition(100, 100)
    mySprite2.destroy()
    info.setLife(3)
    mySprite3 = sprites.create(img`
        d d d d d d d d d d d d d d d d 
        d b b b b b b b b b b b b b b d 
        d b b b b b b b b b b b b b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b 1 1 1 1 1 1 1 1 1 1 b b d 
        d b b b b b b b b b b b b b b d 
        d b b b b b b b b b b b b b b d 
        d d d d d d d d d d d d d d d d 
        `, SpriteKind.Projectile)
    mySprite3.setPosition(100, 220)
    mySprite3.follow(mySprite)
})
let mySprite3: Sprite = null
let Killer_npc_1: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_2`)
mySprite = sprites.create(img`
    . . f f f f f . . 
    . f 1 1 1 1 1 f . 
    f 1 f 1 1 1 f 1 f 
    f 1 f 1 1 1 f 1 f 
    f 1 f 1 1 1 f 1 f 
    . f 1 1 1 1 1 f . 
    . . f 1 1 1 f . . 
    . . f 1 1 1 f . . 
    . . f 1 1 1 f . . 
    . . f 1 1 1 f . . 
    . . f 1 f 1 f . . 
    . . f 1 f 1 f . . 
    . . f 1 f 1 f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f . . . . . . . . . . . . . f 
    f f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(8)
game.splash("I hear some thing outside ")
mySprite2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 f 2 2 2 2 2 2 2 2 2 2 f 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 f 2 2 f 
    f 2 2 2 f 2 2 2 2 2 2 f 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
    f 2 2 2 2 f 2 2 2 2 f 2 2 2 2 f 
    f 2 2 2 f 2 2 2 2 2 2 f 2 2 2 f 
    f 2 2 f 2 2 2 2 2 2 2 2 f 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Enemy)
mySprite2.setPosition(400, 260)
mySprite2.follow(mySprite)
mySprite4 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.NPC)
mySprite4.setPosition(600, 200)
// this sets the players x and y coordinates to the bed.
