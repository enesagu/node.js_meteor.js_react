import React, { Component } from 'react'
import {  DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

export default class CartSummary extends Component {
  render() {
    return (
      <div>

        <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Option - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Option 1
          </DropdownItem>
          <DropdownItem>
            Option 2
          </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>
            Reset
          </DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
        
      </div>
    )
  }
}
