namespace SpriteKind {
    export const Title_Bar = SpriteKind.create()
    export const App_Window = SpriteKind.create()
    export const App_Icon = SpriteKind.create()
    export const Taskbar = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Windows_Menu = SpriteKind.create()
}
function Check_for_Overlap () {
    if (Cursor_Pointer.overlapsWith(Notepad_Desktop)) {
        Notepad_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 9 9 8 9 8 9 8 9 8 9 8 
            8 9 9 9 9 9 9 9 9 9 9 8 
            8 9 6 6 6 6 6 6 6 6 9 8 
            8 9 9 9 9 9 9 9 9 9 9 8 
            8 9 6 6 6 6 6 6 6 6 9 8 
            8 9 9 9 9 9 9 9 9 9 9 8 
            8 9 9 9 9 9 9 9 9 9 9 8 
            8 9 9 9 9 9 9 9 9 9 9 8 
            8 9 9 9 9 9 9 9 9 9 9 8 
            8 1 1 1 1 1 1 1 1 1 1 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Notepad"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Browser_Desktop)) {
        Browser_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 . . 8 8 8 8 8 8 . . 8 
            8 . 8 8 1 8 8 1 8 8 . 8 
            8 8 1 8 1 8 8 1 8 1 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 1 8 1 8 8 1 8 1 8 8 
            8 8 1 8 1 8 8 1 8 1 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 1 8 1 8 8 1 8 1 8 8 
            8 . 8 8 1 8 8 1 8 8 . 8 
            8 . . 8 8 8 8 8 8 . . 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Browser"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Calculator_Desktop)) {
        Calculator_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 . b 9 9 9 9 9 9 b . 8 
            8 . b 9 9 9 9 9 9 b . 8 
            8 . b b b b b b b b . 8 
            8 . b d d b d d d b . 8 
            8 . b b b b b b b b . 8 
            8 . b d d b d d d b . 8 
            8 . b d d b d d d b . 8 
            8 . b b b b b b b b . 8 
            8 . b d d b 8 8 8 b . 8 
            8 . b d d b 8 8 8 b . 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Calculator"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Music_Desktop)) {
        Music_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 . . 4 4 4 4 4 4 . . 8 
            8 . 4 4 4 4 1 1 1 3 . 8 
            8 4 4 1 1 1 4 3 1 3 2 8 
            8 4 4 1 4 3 3 3 1 2 2 8 
            8 4 4 1 3 3 3 3 1 2 2 8 
            8 4 4 1 3 3 3 1 1 2 2 8 
            8 3 1 1 3 2 2 1 1 2 2 8 
            8 . 1 1 2 2 2 2 2 2 . 8 
            8 9 9 2 2 2 2 2 2 9 9 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Music"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Paint_Desktop)) {
        Paint_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 . . . . 9 9 9 9 . . 8 
            8 . . . 9 8 8 9 9 9 . 8 
            8 . . 9 9 9 9 9 1 1 9 8 
            8 . 9 2 2 9 9 9 d d 9 8 
            8 9 9 9 9 9 9 9 f f 9 8 
            8 9 5 5 9 9 . 9 f f . 8 
            8 9 5 5 9 9 9 9 f f . 8 
            8 9 9 9 9 . 9 9 f f . 8 
            8 . 9 9 . 9 9 9 f f . 8 
            8 . . . . 9 9 9 . . . 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Paint"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Recycle_Bin_Desktop)) {
        Recycle_Bin_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 . b b b b b b b b . 8 
            8 b 1 1 1 1 1 1 1 1 b 8 
            8 b 1 1 1 1 1 1 1 1 b 8 
            8 b b b b b b b b b b 8 
            8 b 1 1 1 1 1 1 1 1 b 8 
            8 b 1 1 1 8 9 1 1 1 b 8 
            8 . b 1 9 1 1 8 1 b . 8 
            8 . b 1 8 1 1 9 1 b . 8 
            8 . b 1 1 1 1 1 1 b . 8 
            8 . . b b b b b b . . 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Recycle Bin"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Settings_Desktop)) {
        Settings_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 . . . b . b . b . . 8 
            8 . b b b b b b . b . 8 
            8 b . b b b b b b b . 8 
            8 . b b b b b b b b b 8 
            8 b b b b . . b b b . 8 
            8 . b b b . . b b b b 8 
            8 b b b b b b b b b . 8 
            8 . b b b b b b b . b 8 
            8 . b . b b b b b b . 8 
            8 . . b . b . b . . . 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Settings"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Files_Desktop)) {
        Files_Desktop.setImage(img`
            8 8 8 8 8 8 8 8 8 8 8 8 
            8 b b . . . . . . . . 8 
            8 b b b 5 5 5 5 5 5 5 8 
            8 b 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 8 
            8 5 6 6 6 6 6 6 6 6 5 8 
            8 5 8 6 6 6 6 6 6 8 5 8 
            8 5 8 8 5 5 5 5 8 8 5 8 
            8 5 8 8 5 5 5 5 8 8 5 8 
            8 . 8 8 . . . . 8 8 . 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            `)
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (game.runtime() - Last_Click_Time < 300) {
            Current_App = "Files"
            Open_App()
        } else {
            Last_Click_Time = game.runtime()
        }
    } else if (Cursor_Pointer.overlapsWith(Start_Button_Taskbar)) {
        Windows_Button()
    } else {
        Notepad_Desktop.setImage(img`
            . . . 8 . 8 . 8 . 8 . . 
            . 9 9 8 9 8 9 8 9 8 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 6 6 6 6 6 6 6 6 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 . 
            . 1 1 1 1 1 1 1 1 1 1 . 
            . e e e e e e e e e e . 
            `)
        Recycle_Bin_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . b b b b b b b b . . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b b b b b b b b b b . 
            . b 1 1 1 1 1 1 1 1 b . 
            . b 1 1 1 8 9 1 1 1 b . 
            . . b 1 9 1 1 8 1 b . . 
            . . b 1 8 1 1 9 1 b . . 
            . . b 1 1 1 1 1 1 b . . 
            . . . b b b b b b . . . 
            . . . . . . . . . . . . 
            `)
        Browser_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 . . . 
            . . 8 8 1 8 8 1 8 8 . . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . 8 1 8 1 8 8 1 8 1 8 . 
            . . 8 8 1 8 8 1 8 8 . . 
            . . . 8 8 8 8 8 8 . . . 
            . . . . . . . . . . . . 
            `)
        Settings_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . b . b . b . . . 
            . . b b b b b b . b . . 
            . b . b b b b b b b . . 
            . . b b b b b b b b b . 
            . b b b b . . b b b . . 
            . . b b b . . b b b b . 
            . b b b b b b b b b . . 
            . . b b b b b b b . b . 
            . . b . b b b b b b . . 
            . . . b . b . b . . . . 
            . . . . . . . . . . . . 
            `)
        Calculator_Desktop.setImage(img`
            . . b b b b b b b b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b 9 9 9 9 9 9 b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b d d d b . . 
            . . b d d b d d d b . . 
            . . b b b b b b b b . . 
            . . b d d b 8 8 8 b . . 
            . . b d d b 8 8 8 b . . 
            . . b b b b b b b b . . 
            `)
        Paint_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . . . 9 9 9 9 . . . 
            . . . . 9 8 8 9 9 9 . . 
            . . . 9 9 9 9 9 1 1 9 . 
            . . 9 2 2 9 9 9 d d 9 . 
            . 9 9 9 9 9 9 9 f f 9 . 
            . 9 5 5 9 9 . 9 f f . . 
            . 9 5 5 9 9 9 9 f f . . 
            . 9 9 9 9 . 9 9 f f . . 
            . . 9 9 . 9 9 9 f f . . 
            . . . . . 9 9 9 . . . . 
            . . . . . . . . . . . . 
            `)
        Files_Desktop.setImage(img`
            . . . . . . . . . . . . 
            b b b . . . . . . . . . 
            b b b b 5 5 5 5 5 5 5 5 
            b b 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 6 6 6 6 6 6 6 6 5 5 
            5 5 8 6 6 6 6 6 6 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            5 5 8 8 5 5 5 5 8 8 5 5 
            . . 8 8 . . . . 8 8 . . 
            . . . . . . . . . . . . 
            `)
        Music_Desktop.setImage(img`
            . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 1 1 1 3 . . 
            . 4 4 1 1 1 4 3 1 3 2 . 
            . 4 4 1 4 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 3 1 2 2 . 
            . 4 4 1 3 3 3 1 1 2 2 . 
            . 3 1 1 3 2 2 1 1 2 2 . 
            . . 1 1 2 2 2 2 2 2 . . 
            . 9 9 2 2 2 2 2 2 9 9 . 
            . 8 8 8 8 8 8 8 8 8 8 . 
            . . . . . . . . . . . . 
            `)
        if (Current_App != "None") {
            if (Cursor_Pointer.overlapsWith(Title_Bar_X)) {
                sprites.destroyAllSpritesOfKind(SpriteKind.App_Window)
                sprites.destroyAllSpritesOfKind(SpriteKind.Title_Bar)
                Current_App = "None"
            }
        }
    }
}
function Windows_Button () {
    Windows_Menu = sprites.create(img`
        ............................................................................
        ............................................................................
        ............................................................................
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        ....bb1111111111111111111111111111111111111111111111111111111111111111bb....
        ...bb111111111111111111111111111111111111111111111111111111111111111111bb...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...b11111111111111111111111111111111111111111111111111111111111111111111b...
        ...bb111111111111111111111111111111111111111111111111111111111111111111bb...
        ....bb1111111111111111111111111111111111111111111111111111111111111111bb....
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        ............................................................................
        ............................................................................
        ............................................................................
        `, SpriteKind.Windows_Menu)
    Windows_Menu.bottom = Taskbar.top
    Windows_Menu.left = 0
    Windows_Menu.z = 30
    Windows_Menu_Profile_Picture = sprites.create(assets.image`Default Profile Picture`, SpriteKind.Windows_Menu)
    Windows_Menu_Profile_Picture.setPosition(10, 22)
    Windows_Menu_Profile_Picture.z = 31
    Windows_Menu_Username = textsprite.create("User")
    Windows_Menu_Username.setPosition(32, 22)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Check_for_Overlap()
})
function Logged_In () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    Make_Cursor()
    Enable_Taskbar()
    Make_Desktop()
}
function Open_App () {
    Make_Title_Bar()
    if (Current_App == "Notepad ") {
        Notepad_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Notepad_Open.top = 0
        Notepad_Open.z = 20
    } else if (Current_App == "Browser") {
        Browser_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Browser_Open.top = 0
        Browser_Open.z = 20
    } else if (Current_App == "Calculator") {
        Calculator_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Calculator_Open.top = 0
        Calculator_Open.z = 20
    } else if (Current_App == "Music") {
        Music_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Music_Open.top = 0
        Music_Open.z = 20
        Music_Contents()
    } else if (Current_App == "Paint") {
        Paint_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Paint_Open.top = 0
        Paint_Open.z = 20
    } else if (Current_App == "Recycle Bin") {
        Recycle_Bin_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Recycle_Bin_Open.top = 0
        Recycle_Bin_Open.z = 20
    } else if (Current_App == "Settings") {
        Settings_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Settings_Open.top = 0
        Settings_Open.z = 20
    } else if (Current_App == "Files") {
        Files_Open = sprites.create(assets.image`Start Menu`, SpriteKind.App_Window)
        Files_Open.top = 0
        Files_Open.z = 20
    } else {
        return
    }
}
function Enable_Taskbar () {
    Taskbar = sprites.create(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.Taskbar)
    Taskbar.top = 108
    Taskbar.left = 0
    Taskbar.z = 50
    Start_Button_Taskbar = sprites.create(img`
        b b b b b b b b b b b b 
        b 9 9 9 9 b b 9 8 8 8 b 
        b 9 9 9 8 b b 8 8 8 8 b 
        b 9 9 8 8 b b 8 8 8 8 b 
        b 9 8 8 8 b b 8 8 8 8 b 
        b b b b b b b b b b b b 
        b b b b b b b b b b b b 
        b 9 8 8 8 b b 8 8 8 8 b 
        b 8 8 8 8 b b 8 8 8 8 b 
        b 8 8 8 8 b b 8 8 8 8 b 
        b 8 8 8 8 b b 8 8 8 8 b 
        b b b b b b b b b b b b 
        `, SpriteKind.Taskbar)
    Start_Button_Taskbar.left = 0
    Start_Button_Taskbar.top = 108
    Start_Button_Taskbar.z = 51
}
function Enable_Cursor_Movement (en: boolean) {
    if (en) {
        controller.moveSprite(Cursor_Pointer, 70, 68)
    } else {
        controller.moveSprite(Cursor_Pointer, 0, 0)
    }
}
function Music_Contents () {
    Music_Scale = sprites.create(img`
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1ffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f211111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f141111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f115111111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f111711111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f111161111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f111119111111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f111111811111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f1111111c1111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f11111111a111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f111111111311f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f1111111111d1f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1f11111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1ffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.App_Window)
    Music_Scale.top = Taskbar.bottom
    Music_Scale.left = 0
    Music_Scale.z = 21
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
}
function Update_Cursor () {
    if (!(Cursor) || !(Cursor_Pointer)) {
        return
    }
    Cursor.top = Cursor_Pointer.top
    Cursor.left = Cursor_Pointer.left
}
function Make_Title_Bar () {
    Title_Bar = sprites.create(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.Title_Bar)
    Title_Bar.top = 0
    Title_Bar.right = 160
    Title_Bar.z = 21
    Title_Bar_X = sprites.create(img`
        b b b b b b b b b b 
        b 2 b b b b b b 2 b 
        b b 2 b b b b 2 b b 
        b b b 2 b b 2 b b b 
        b b b b 2 2 b b b b 
        b b b b 2 2 b b b b 
        b b b 2 b b 2 b b b 
        b b 2 b b b b 2 b b 
        b 2 b b b b b b 2 b 
        b b b b b b b b b b 
        `, SpriteKind.Title_Bar)
    Title_Bar_X.right = Title_Bar.right
    Title_Bar_X.top = Title_Bar.top
    Title_Bar_X.z = 22
}
function Startup () {
    if (Set_Pin != 1) {
        Pin = game.askForNumber("Type in Pin")
        Set_Pin = 1
        Logged_In()
    } else {
        if (game.askForNumber("Type in Pin") != Pin) {
            game.showLongText("Wrong pin!", DialogLayout.Bottom)
        } else {
            Logged_In()
        }
    }
}
function Make_Desktop () {
    Recycle_Bin_Desktop = sprites.create(img`
        . . . . . . . . . . . . 
        . . b b b b b b b b . . 
        . b 1 1 1 1 1 1 1 1 b . 
        . b 1 1 1 1 1 1 1 1 b . 
        . b b b b b b b b b b . 
        . b 1 1 1 1 1 1 1 1 b . 
        . b 1 1 1 8 9 1 1 1 b . 
        . . b 1 9 1 1 8 1 b . . 
        . . b 1 8 1 1 9 1 b . . 
        . . b 1 1 1 1 1 1 b . . 
        . . . b b b b b b . . . 
        . . . . . . . . . . . . 
        `, SpriteKind.App_Icon)
    Recycle_Bin_Desktop.setPosition(12, 12)
    Recycle_Bin_Desktop.z = 20
    Notepad_Desktop = sprites.create(img`
        . . . 8 . 8 . 8 . 8 . . 
        . 9 9 8 9 8 9 8 9 8 9 . 
        . 9 9 9 9 9 9 9 9 9 9 . 
        . 9 6 6 6 6 6 6 6 6 9 . 
        . 9 9 9 9 9 9 9 9 9 9 . 
        . 9 6 6 6 6 6 6 6 6 9 . 
        . 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 . 
        . 1 1 1 1 1 1 1 1 1 1 . 
        . e e e e e e e e e e . 
        `, SpriteKind.App_Icon)
    Notepad_Desktop.setPosition(12, 32)
    Notepad_Desktop.z = 20
    Browser_Desktop = sprites.create(img`
        . . . . . . . . . . . . 
        . . . 8 8 8 8 8 8 . . . 
        . . 8 8 1 8 8 1 8 8 . . 
        . 8 1 8 1 8 8 1 8 1 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . 
        . 8 1 8 1 8 8 1 8 1 8 . 
        . 8 1 8 1 8 8 1 8 1 8 . 
        . 8 8 8 8 8 8 8 8 8 8 . 
        . 8 1 8 1 8 8 1 8 1 8 . 
        . . 8 8 1 8 8 1 8 8 . . 
        . . . 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . 
        `, SpriteKind.App_Icon)
    Browser_Desktop.setPosition(12, 52)
    Browser_Desktop.z = 20
    Settings_Desktop = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . b . b . b . . . 
        . . b b b b b b . b . . 
        . b . b b b b b b b . . 
        . . b b b b b b b b b . 
        . b b b b . . b b b . . 
        . . b b b . . b b b b . 
        . b b b b b b b b b . . 
        . . b b b b b b b . b . 
        . . b . b b b b b b . . 
        . . . b . b . b . . . . 
        . . . . . . . . . . . . 
        `, SpriteKind.App_Icon)
    Settings_Desktop.setPosition(12, 72)
    Settings_Desktop.z = 20
    Calculator_Desktop = sprites.create(img`
        . . b b b b b b b b . . 
        . . b 9 9 9 9 9 9 b . . 
        . . b 9 9 9 9 9 9 b . . 
        . . b b b b b b b b . . 
        . . b d d b d d d b . . 
        . . b b b b b b b b . . 
        . . b d d b d d d b . . 
        . . b d d b d d d b . . 
        . . b b b b b b b b . . 
        . . b d d b 8 8 8 b . . 
        . . b d d b 8 8 8 b . . 
        . . b b b b b b b b . . 
        `, SpriteKind.App_Icon)
    Calculator_Desktop.setPosition(40, 12)
    Calculator_Desktop.z = 20
    Paint_Desktop = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . 9 9 9 9 . . . 
        . . . . 9 8 8 9 9 9 . . 
        . . . 9 9 9 9 9 1 1 9 . 
        . . 9 2 2 9 9 9 d d 9 . 
        . 9 9 9 9 9 9 9 f f 9 . 
        . 9 5 5 9 9 . 9 f f . . 
        . 9 5 5 9 9 9 9 f f . . 
        . 9 9 9 9 . 9 9 f f . . 
        . . 9 9 . 9 9 9 f f . . 
        . . . . . 9 9 9 . . . . 
        . . . . . . . . . . . . 
        `, SpriteKind.App_Icon)
    Paint_Desktop.setPosition(40, 32)
    Paint_Desktop.z = 20
    Files_Desktop = sprites.create(img`
        . . . . . . . . . . . . 
        b b b . . . . . . . . . 
        b b b b 5 5 5 5 5 5 5 5 
        b b 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 6 6 6 6 6 6 6 6 5 5 
        5 5 8 6 6 6 6 6 6 8 5 5 
        5 5 8 8 5 5 5 5 8 8 5 5 
        5 5 8 8 5 5 5 5 8 8 5 5 
        . . 8 8 . . . . 8 8 . . 
        . . . . . . . . . . . . 
        `, SpriteKind.App_Icon)
    Files_Desktop.setPosition(40, 52)
    Files_Desktop.z = 20
    Music_Desktop = sprites.create(img`
        . . . . . . . . . . . . 
        . . . 4 4 4 4 4 4 . . . 
        . . 4 4 4 4 1 1 1 3 . . 
        . 4 4 1 1 1 4 3 1 3 2 . 
        . 4 4 1 4 3 3 3 1 2 2 . 
        . 4 4 1 3 3 3 3 1 2 2 . 
        . 4 4 1 3 3 3 1 1 2 2 . 
        . 3 1 1 3 2 2 1 1 2 2 . 
        . . 1 1 2 2 2 2 2 2 . . 
        . 9 9 2 2 2 2 2 2 9 9 . 
        . 8 8 8 8 8 8 8 8 8 8 . 
        . . . . . . . . . . . . 
        `, SpriteKind.App_Icon)
    Music_Desktop.setPosition(40, 72)
    Music_Desktop.z = 20
}
function Make_Cursor () {
    Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Cursor)
    Cursor_Pointer = sprites.create(img`
        f 
        `, SpriteKind.Cursor)
    Cursor.setFlag(SpriteFlag.Ghost, true)
    Cursor_Pointer.setFlag(SpriteFlag.StayInScreen, true)
    Cursor_Pointer.setFlag(SpriteFlag.GhostThroughWalls, true)
    Cursor.z = 100
    Cursor_Pointer.z = 99
    Update_Cursor()
    Enable_Cursor_Movement(true)
}
let Pin = 0
let Title_Bar: Sprite = null
let Cursor: Sprite = null
let Music_Scale: Sprite = null
let Files_Open: Sprite = null
let Settings_Open: Sprite = null
let Recycle_Bin_Open: Sprite = null
let Paint_Open: Sprite = null
let Music_Open: Sprite = null
let Calculator_Open: Sprite = null
let Browser_Open: Sprite = null
let Notepad_Open: Sprite = null
let Windows_Menu_Username: TextSprite = null
let Windows_Menu_Profile_Picture: Sprite = null
let Taskbar: Sprite = null
let Windows_Menu: Sprite = null
let Title_Bar_X: Sprite = null
let Last_Click_Time = 0
let Start_Button_Taskbar: Sprite = null
let Files_Desktop: Sprite = null
let Settings_Desktop: Sprite = null
let Recycle_Bin_Desktop: Sprite = null
let Paint_Desktop: Sprite = null
let Music_Desktop: Sprite = null
let Calculator_Desktop: Sprite = null
let Browser_Desktop: Sprite = null
let Notepad_Desktop: Sprite = null
let Cursor_Pointer: Sprite = null
let Current_App = ""
let Set_Pin = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
Set_Pin = 0
game.showLongText("Computer Simulation v2.4", DialogLayout.Bottom)
game.showLongText("Press A to startup!", DialogLayout.Bottom)
pauseUntil(() => controller.A.isPressed())
Startup()
Current_App = "None"
game.onUpdate(function () {
    Update_Cursor()
})
