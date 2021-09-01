import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from '../routes'
export default class NavBar extends Component {
  state = {}

  

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
       
          <Link route="/">
            <a className="item">
            <img src='https://pbs.twimg.com/profile_images/1268534114904391681/jXyihSx9_400x400.png' alt="Campaign"></img>
            </a>  
          </Link>
        

       
        <Menu.Menu position='right'>
        <Link route="/">
            <a className="item">
            Campaigns
            </a>  
          </Link>
          <Link route="/campaigns/new">
            <a className="item">
            +
            </a>  
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}