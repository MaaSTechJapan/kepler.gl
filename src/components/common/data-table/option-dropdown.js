// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component, useCallback} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import {Pin, ArrowDown, Clipboard, Cancel} from 'components/common/icons';
import ClickOutsideCloseDropdown from 'components/side-panel/panel-dropdown';
import MoreOptions from './more-options';
import Portaled from './portaled';
import DropdownList from 'components/common/item-selector/dropdown-list';

const ListItem = ({value}) => (
  <div>
    <value.icon height="13px" />
    {value.display}
  </div>
);

const StyledOptionsDropdown = styled.div`
  transition: ${props => props.theme.transitionSlow};
  margin-top: ${props => (props.show ? '6px' : '20px')};
  pointer-events: ${props => (props.show ? 'all' : 'none')};
  opacity: ${props => (props.show ? 1 : 0)};
  z-index: 10000;
  position: absolute;

  .list-selector {
    border-top: 0;
    width: max-content;
    padding: 8px 0;
  }

  .list__item > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    line-height: 18px;

    svg {
      margin-right: 5px;
    }
  }
`;

const listOptions = [
  {value: 'sort', display: 'Sort Column', icon: ArrowDown},
  {value: 'cancel', display: 'Unsort Column', icon: Cancel, condition: props => props.isSorted},
  {value: 'pin', display: 'Pin Column', icon: Pin},
  {value: 'copy', display: 'Copy Column', icon: Clipboard}
];

const OptionDropdown = props => {
  const {
    isOpened,
    column,
    toggleMoreOptions,
    sortTableColumn,
    mode,
    sortColumn,
    pinTableColumn,
    copyColumn,
    isSorted,
    unsortColumn,
    isNSorted
  } = props;
  const onOptionSelected = useCallback(
    ({value}) => {
      console.log(value)
      switch (value) {
        case 'sort':
          sortTableColumn();
          break;
        case 'cancel':
          unsortColumn();
          break;
        case 'pin':
          pinTableColumn();
          break;
        case 'copy':
          copyColumn(column);
          break;
        default:
          break;
      }

      toggleMoreOptions(column);
    },
    [column, sortTableColumn, pinTableColumn, copyColumn, toggleMoreOptions]
  );

  const options = listOptions.filter(op => !op.condition || op.condition(props));

  return (
    <Portaled
      isOpened={isOpened}
      right={90}
      top={0}
      overlay={() => toggleMoreOptions(column)}
      overlayZIndex={9999}
    >
      <StyledOptionsDropdown show={isOpened} className="more-options">
        <DropdownList
          displayOption={d => d.display}
          options={options}
          customListItemComponent={ListItem}
          onOptionSelected={onOptionSelected}
          light
        />
      </StyledOptionsDropdown>
      {/* <StyledOptionsDropdown show={isOpened}>
            <div
              className="sort"
              onClick={() => {
                setSortColumn(column);
                onClose();
              }}
            >
              <ArrowDown height="13" style={{marginRight: '5px'}} width="13" />

              {'Sort Column'}
            </div>

            <div
              className="sort"
              onClick={() => {
                setSortColumn(column, mode, true);
                onClose();
              }}
            >
              <ArrowDown height="13" style={{marginRight: '5px'}} width="13" />

              {`Multi Sort (${Object.keys(sortColumn).length + 1})`}
            </div>

            {isSorted && (
              <div
                className="cancel"
                onClick={() => {
                  unsortColumn(mode);
                  onClose();
                }}
              >
                <Cancel height="13" style={{marginRight: '5px'}} width="13" />

                {`Unsort Column${isNSorted ? 's' : ''}`}
              </div>
            )}

            <div
              className="pin"
              onClick={() => {
                pinColumn(column, mode);
                onClose();
              }}
            >
              <Pin height="13" style={{marginRight: '5px'}} width="13" />

              {'Pin Column'}
            </div>

            <div
              className="col-link"
              onClick={() => {
                copyColumn(column);
                onClose();
              }}
            >
              <Clipboard height="13px" style={{marginRight: '10px'}} width="13" />

              {'Copy Column'}
            </div>
          */}
    </Portaled>
  );
};

export default OptionDropdown;
