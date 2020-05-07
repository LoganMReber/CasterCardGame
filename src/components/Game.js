const Game = props => {
    while(props.player1.health > 0 && props.player2.health > 0){
        switch(props.phase){
            case "P1_MANA":
                return <div>Player 1 Mana Phase</div>
            case "P1_MAIN":
                return <div>Player 1 Main Phase</div>
            case "P1_ATTACK":
                return <div>Player 1 Attacking Phase</div>
            case "P1_BLOCK":
                return <div>Player 1 Blocking Phase</div>
            case "P1_END":
                return <div>Player 1 End Phase</div>
            case "P2_MANA":
                return <div>Player 2 Mana Phase</div>
            case "P2_MAIN":
                return <div>Player 2 Main Phase</div>
            case "P2_ATTACK":
                return <div>Player 2 Attacking Phase</div>
            case "P2_BLOCK":
                return <div>Player 2 Blocking Phase</div>
            case "P2_END":
                return <div>Player 2 End Phase</div>
            default:
                window.alert('Lost phase!')
                return <div>Error</div>
        }
    }
}
