export function calculateBattleWinner(
    you,
    buddy
) {

    if (you > buddy) {

        return 'You Win'
    }

    if (buddy > you) {

        return 'Buddy Wins'
    }

    return 'Draw'
}
