import React, { Component } from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

export default class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Option - {this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu end> {/* Değişiklik burada */}
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>{cartItem.product.productName}</DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
