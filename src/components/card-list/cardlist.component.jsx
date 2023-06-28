import { Component } from "react";
import './cardlist.style.css'
import Card from "../cards/card.component";

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div>
                {monsters.map(monster => {
                    return (
                        <Card monster={monster} />
                    )
                }
                )}
            </div>

        )
    }
}

export default CardList;