import React, { Component } from 'react';
import Monster from '../components/monsters/Monster';
import MonsterHealth from '../components/monsters/MonsterHealth';
import MonsterButtons from '../components/monsters/MonsterButtons';
import demon from '../assets/demon.png';

export default class MonsterGame extends Component {
  state = {
    health: 100,
    alive: true
  }

  handleAttack = () => {
    this.setState(state => {
      const health = state.health - 5;
      return {
        health,
        alive: health > 0
      };
    });
  }

  handlePotion = () => {
    this.setState(state => ({ health: state.health + 5 }));
  }

  render() {
    const { health, alive } = this.state;

    return (
      <>
        {alive ?
          (
            <>
              <Monster img={demon} name="Clairance" />
              <MonsterHealth health={health} />
              <MonsterButtons
                onAttack={this.handleAttack}
                onPotion={this.handlePotion} />
            </>
          )
          :
          (
            <p>You killed Clairance without knowing anything about them...who&apos;s the real demon here!</p>
          )
        }
      </>
    );
  }
}
