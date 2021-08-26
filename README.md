## Project Choice (Tell us which project you're doing!)

PITCH: Onitama
BACKUP: Tower of Hanoi

## Project Description

Onitama is a niche board game played on a 5x5 grid. Each player controls 5 pawns, and chooses from two different movement cards that limit what they can do on their turn.

You can win by the Way of Stone: capturing your opponent's "Sage" pawn...
Or by the Way of Water: moving your Sage pawn to your opponent's temple.

## Wire Frames

> Copy and paste or drag and drop your images here.

## User Stories

> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.

As a player, I want to see where my pawns are, and where my opponent's pawns are, so I can decide on the best move.
As a player, I want to be able to tell which pawns are the Sage pawns, so I can protect mine and target my opponent's.
As a novice, I want a brief explanation of the rules and the website, so I know how to play.
As a player, I want to be able to easily tell which square is my temple, and which is my opponent's, so I can target theirs and protect mine.

As a player, I want to see my current movement cards, so I know how they affect my pawns.
As a player, I want the board to update every time a pawn is moved, so I always know where the pawns are.
As a player, I want to be told when it's my turn, so I know when I should try to move.
As a player, I want to be told when the game is over, and who won, so I can celebrate or break my computer.
As a player, I want to be invited to play again, so I can decide if I want to keep going.

### MVP Goals

Create a board that can receive player's pawn selection and movement choices.

Create pawns that can be "moved" according to the player's choices.
Assign those pawns a team, and a unique id.
Have the pawn leave it's old square, and arrive in its new square, with its team and id tags, when moved.

Create Movement Cards that show the player how they can move.

Update the board every time a pawn moves, and switch current player.
When the board updates, the game will see if any win conditions have been met.
Announce a winner when the game is over, and offer the player another round.

### Stretch Goals

Create a modal that explains the basic rules.
A "confirm move" button lets a player think about their movement.
Movement Cards dictate pawn movement if selected.
Additional Movement Cards, selected randomly at each game start, create variety and complexity to the game.
An "Undo" button lets players take back their choices.
When a Movement Card is selected, and a player selects a pawn, the possible squares "light up."
A Player can toggle between their 2 movement cards by pressing a button, as long as they haven't completed a move.
