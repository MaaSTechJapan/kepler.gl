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

import React, {Component} from 'react';
import {polyfill} from 'react-lifecycles-compat';
import {ScrollSync, AutoSizer} from 'react-virtualized';
import styled, {withTheme} from 'styled-components';
import classnames from 'classnames';
import get from 'lodash.get';
import debounce from 'lodash.debounce';

import {VertThreeDots} from 'components/common/icons';
import FieldToken from 'components/common/field-token';
import OptionDropdown from './option-dropdown';
import {ALL_FIELD_TYPES, SORT_ORDER} from 'constants/default-settings';

// import without from 'lodash/without';
// import union from 'lodash/union';

import Grid from './grid';
import Button from './button';
import Portaled from './portaled';
import MoreOptions from './more-options';
import {Pin, ArrowDownAlt, ArrowUpAlt, Clipboard, Cancel} from 'components/common/icons';
import {parseFieldValue} from 'utils/data-utils';
import {getSizeSum, expandLastCell, shrinkFinalCell} from './cell-size';

const iconOrder = {
  [SORT_ORDER.ascending]: ArrowUpAlt,
  [SORT_ORDER.descending]: ArrowDownAlt,
  [SORT_ORDER.ascending]: ArrowUpAlt
};

const defaultHeaderRowHeight = 55;
const defaultRowHeight = 32;
const overscanColumnCount = 10;
const overscanRowCount = 10;
const fieldToAlignRight = {
  [ALL_FIELD_TYPES.integer]: true,
  [ALL_FIELD_TYPES.real]: true
};

export const Container = styled.div`
  display: flex;
  font-size: 11px;
  flex-grow: 1;
  color: ${props => props.theme.textColorLT};

  .ReactVirtualized__Grid:focus,
  .ReactVirtualized__Grid:active {
    outline: 0;
  }
  /* .ReactVirtualized__Grid__innerScrollContainer {
    ${props => props.theme.modalScrollBar};
  } */

  .cell {
    &::-webkit-scrollbar {
      display: none;
    }
    a {
      color: blue;
      &:visited {
        color: #00e1eb !important;
      }
    }

    &.hovered {
      background-color: blue;
    }
  }

  .cell:hover {
    background-color: blue;
  }

  *:focus {
    outline: 0;
  }

  .results-table-wrapper {
    position: relative;
    min-height: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    overflow: hidden;
    border-top: none;

    .scroll-in-ui-thread::after {
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      pointer-events: none;
      top: 0;
      width: 100%;
    }

    .grid-row {
      position: relative;
      display: flex;
      flex-direction: row;
    }
    .grid-column {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
    }
    .pinned-grid-container {
      flex: 0 0 75px;
      z-index: 10;
      position: absolute;
      left: 0;
      top: 0;
      border-right: 2px solid ${props => props.theme.pinnedGridBorderColor};
    }

    .header-grid {
      overflow: hidden !important;
    }

    .body-grid {
      overflow: overlay !important;
    }

    .pinned-grid {
      overflow: overlay !important;
    }

    .even-row {
      background-color: ${props => props.theme.evenRowBackground};
    }
    .odd-row {
      background-color: ${props => props.theme.oddRowBackground};
    }
    .cell,
    .header-cell {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: center;
      overflow: hidden;

      .n-sort-idx {
        font-size: 9px;
      }
    }
    .cell {
      border-bottom: 1px solid ${props => props.theme.cellBorderColor};
      border-right: 1px solid ${props => props.theme.cellBorderColor};
      white-space: nowrap;
      overflow: auto;
      padding: 0 ${props => props.theme.cellPaddingSide}px;
      font-size: ${props => props.theme.cellFontSize}px;

      .result-link {
        text-decoration: none;
      }
    }
    .cell.end-cell,
    .header-cell.end-cell {
      border-right: none;
      padding-right: ${props => props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide}px;
    }
    .cell.first-cell,
    .header-cell.first-cell {
      padding-left: ${props => props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide}px;
    }
    .cell.bottom-cell {
      border-bottom: none;
    }
    .cell.align-right {
      align-items: flex-end;
    }
    .header-cell {
      border-bottom: 1px solid ${props => props.theme.headerCellBorderColor};
      border-top: 1px solid ${props => props.theme.headerCellBorderColor};
      padding-top: ${props => props.theme.headerPaddingTop}px;
      padding-right: 0;
      padding-bottom: ${props => props.theme.headerPaddingBottom}px;
      padding-left: ${props => props.theme.cellPaddingSide}px;
      align-items: center;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      background-color: ${props => props.theme.headerCellBackground};

      &:hover {
        .options {
          .more {
            color: ${props => props.theme.headerCellIconColor};
          }
        }
      }
      .n-sort-idx {
        font-size: 9px;
      }
      .details {
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        overflow: hidden;
        .col-name {
          display: flex;
          align-items: center;
          svg {
            margin-left: 3px;
          }
        }
      }

      .options {
        .more {
          color: transparent;
          margin-left: 5px;
        }
      }
    }
  }

  :focus {
    outline: none;
  }
`;

const validateCellDataSize = (data, {cellSizeLimit = 10000}) => {
  if (`${data}`.length <= cellSizeLimit) {
    return data;
  }
  return 'Data too large, download CSV';
};

const defaultColumnWidth = 200;

const columnWidthFunction = (columns, cellSizeCache) => ({index}) => {
  return cellSizeCache[columns[index]] || defaultColumnWidth;
};

/*
 * This is an accessor method used to generlize getting a cell from a data row
 */
const getRowCell = ({
  rows,
  column,
  dedupedColumns,
  dedupedColMeta,
  rowIndex,
  sortColumn,
  sortOrder
}) => {
  const rowIdx =
    // Boolean(Object.keys(sortColumn).length) &&
    sortOrder && sortOrder.length ? get(sortOrder, rowIndex) : rowIndex;
  const type = dedupedColMeta[column];
  return parseFieldValue(get(rows, [rowIdx, dedupedColumns.indexOf(column)], 'Err'), type);
};

const renderHeaderCell = (columns, isPinned, props, toggleMoreOptions, moreOptionsColumn) => {
  // eslint-disable-next-line react/display-name
  return cellInfo => {
    const {columnIndex, key, style} = cellInfo;
    const {
      dedupedColMeta,
      mode,
      sortColumn,
      sortTableColumn,
      unsortColumn,
      pinTableColumn,
      copyColumn,
      dataId
    } = props;

    const column = columns[columnIndex];

    const isSorted = Boolean(sortColumn[column]);
    const isNSorted = Object.keys(sortColumn).length > 1;
    const Icon = isSorted ? iconOrder[sortColumn[column]] : iconOrder.default;
    console.log(Icon)
    const firstCell = columnIndex === 0;

    return (
      <div
        className={classnames('header-cell', {
          'pinned-header-cell': isPinned,
          'first-cell': firstCell
        })}
        key={key}
        style={style}
        onClick={e => {
          e.shiftKey ? sortTableColumn(dataId, column, mode, true) : null;
        }}
        onDoubleClick={() => sortTableColumn(dataId, column, mode)}
        title={column}
      >
        <section className="details">
          <div className="col-name">
            {column}
            {isSorted && <iconOrder.ascending height="10" width="10" />}
            {isSorted && isNSorted && (
              <div className="n-sort-idx">{`${sortColumn[column].idx}`}</div>
            )}
          </div>

          <FieldToken type={dedupedColMeta[column]} />
        </section>

        <section className="options">
          <Button className="more" onClick={() => toggleMoreOptions(column)}>
            <VertThreeDots height="14px" />
          </Button>
          <OptionDropdown
            isOpened={moreOptionsColumn === column}
            type={dedupedColMeta[column]}
            column={column}
            toggleMoreOptions={toggleMoreOptions}
            sortTableColumn={() => sortTableColumn(dataId, column)}
            mode={mode}
            sortColumn={sortColumn}
            pinTableColumn={() => pinTableColumn(dataId, column)}
            copyColumn={copyColumn}
            isSorted={isSorted}
            unsortColumn={unsortColumn}
            isNSorted={isNSorted}
          />
        </section>
      </div>
    );
  };
};

// eslint-disable-next-line complexity
const renderDataCell = (columns, isPinned, props, hover, hoverCell) => {
  // eslint-disable-next-line complexity
  return cellInfo => {
    const {columnIndex, key, style, rowIndex} = cellInfo;
    const {cellSizeLimit, rows, dedupedColMeta} = props;
    // const shouldPin = isPinned && columnIndex < pinnedColumns.length;
    const column = columns[columnIndex];
    const rowCell = validateCellDataSize(getRowCell({...props, column, rowIndex}), {cellSizeLimit});
    const endCell = columnIndex === columns.length - 1;
    const firstCell = columnIndex === 0;
    const bottomCell = rowIndex === rows.length - 1;
    const type = dedupedColMeta[column];
    const alignRight = fieldToAlignRight[type];

    const hoveredItem =
      rowIndex === hover.rowIndex ||
      (isPinned && columnIndex === hover.pinnedColumnIndex) ||
      (!isPinned && columnIndex === hover.unpinnedColumnIndex);
    const cell = (
      <div
        className={classnames('cell', {
          [rowIndex % 2 === 0 ? 'even-row' : 'odd-row']: true,
          'pinned-cell': isPinned,
          'first-cell': firstCell,
          'end-cell': endCell,
          'bottom-cell': bottomCell,
          'align-right': alignRight,
          hovered: hoveredItem
        })}
        key={key}
        style={style}
        title={rowCell}
        {...(hoverCell
          ? {
              onMouseOver: () =>
                hoverCell({
                  pinnedColumnIndex: isPinned ? columnIndex : null,
                  unpinnedColumnIndex: !isPinned ? columnIndex : null,
                  rowIndex
                })
            }
          : {})}
      >
        {`${rowCell}${endCell ? '\n' : '\t'}`}
      </div>
    );

    return cell;
  };
};

// const mapStateToProps = state => {
//   const viewConfig = {} || get(state |> getReports, 'report.version.view_configuration', {});
//   const reportMeta = get(state |> getReports, 'reportMeta', {});
//   const hoverHighlight = getUserSetting(state.user, 'tableHoverHighlight');

//   const columns = get(state, 'results.meta.columns', []).map(col => col.name);
//   const dedupedColumns = get(state, 'results.meta.dedupedColumns', []).map(col => col.name);
//   const dedupedColMeta = get(state, 'results.meta.dedupedColumns', []).reduce(
//     (acc, {name, data_type}) => ({
//       ...acc,
//       [name]: data_type
//     }),
//     {}
//   );

//   const pinnedColumns = [] || union(viewConfig.pinnedColumns || [], reportMeta.pinnedColumns || []);
//   const unpinnedColumns = without(dedupedColumns, ...pinnedColumns);

//   const sort = get(state, 'results.meta.sort.sort', viewConfig.sort);

//   const links = {...viewConfig.link, ...reportMeta.link};

//   const sortColumn = sort.reduce(
//     (acc, val, idx) => ({
//       ...acc,
//       [val.column]: {
//         direction: val.direction,
//         idx
//       }
//     }),
//     {}
//   );

//   return {
//     isLoading: state.results.isLoading,
//     isLoaded: state.results.isLoaded,
//     rows: state.results.data,
//     columns,
//     dedupedColumns,
//     dedupedColMeta,
//     rowCount: get(state, 'results.data.length'),
//     hoverHighlight,

//     pinnedColumns,
//     unpinnedColumns,
//     hasPinnedColumns: !!pinnedColumns.length,

//     cellSizeCache: get(state, 'results.meta.cellSizeCache'),

//     links,

//     sortColumn,
//     sortOrder: get(state, 'results.meta.sort.order', [])
//   };
// };

/**
 * This is the results table component that shows well, results
 * in a table
 */

// @connect(
//   mapStateToProps,
//   {createToast, setSortColumn, unsortColumn, pinTableColumn, openModal, copyColumn},
//   (state, dispatch, own) => ({...state, ...dispatch, ...own})
// )

const TableSection = ({
  classList,
  isPinned,
  columns,
  headerGridProps,
  fixedWidth,
  onScroll,
  scrollTop,
  dataGridProps,
  columnWidth,
  setGridRef,
  headerCellRender,
  dataCellRender,
  scrollLeft
}) => (
  <AutoSizer>
    {({width, height}) => {
      const gridDimension = {
        columnCount: columns.length,
        columnWidth,
        width: fixedWidth || width
      };

      return (
        <>
          <div className={classnames('scroll-in-ui-thread', classList.header)}>
            <Grid
              cellRenderer={headerCellRender}
              {...headerGridProps}
              {...gridDimension}
              scrollLeft={scrollLeft}
            />
          </div>
          <div
            className={classnames('scroll-in-ui-thread', classList.rows)}
            style={{
              top: headerGridProps.height
            }}
          >
            <Grid
              cellRenderer={dataCellRender}
              {...dataGridProps}
              {...gridDimension}
              className={isPinned ? 'pinned-grid' : 'body-grid'}
              height={height - headerGridProps.height}
              onScroll={onScroll}
              scrollTop={scrollTop}
              setGridRef={setGridRef}
            />
          </div>
        </>
      );
    }}
  </AutoSizer>
);

function DataTableFactory() {
  class DataTable extends Component {
    static defaultProps = {
      rows: [],
      rowCount: 0,
      unpinnedColumns: [],
      pinnedColumns: [],
      dedupedColMeta: {},
      cellSizeCache: {},
      sortColumn: {},
      fixedWidth: null
    };

    static getDerivedStateFromProps(props, state) {
      const {cellSizeCache} = props;
      if (props.cellSizeCache !== state.prevCellSizeCache) {
        return {cellSizeCache, prevCellSizeCache: cellSizeCache};
      }

      return null;
    }

    state = {
      cellSizeCache: this.props.cellSizeCache,
      moreOptionsColumn: null,
      hover: {unpinnedColumnIndex: null, pinnedColumnIndex: null, rowIndex: null}
    };

    componentDidMount() {
      window.addEventListener('resize', this.scaleCellsToWidth);
      this.scaleCellsToWidth();
    }

    componentDidUpdate(prevProps) {
      if (this.props.cellSizeCache !== prevProps.cellSizeCache) {
        this.scaleCellsToWidth();
      }
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.scaleCellsToWidth);
    }

    hoverCell = hover =>
      this.setState({hover}, () => {
        this.pinnedGrid && this.pinnedGrid.forceUpdate();
        this.unpinnedGrid && this.unpinnedGrid.forceUpdate();
      });

    toggleMoreOptions = moreOptionsColumn =>
      this.setState({
        moreOptionsColumn:
          this.state.moreOptionsColumn === moreOptionsColumn ? null : moreOptionsColumn
      });

    doScaleCellsToWidth = () => {
      const {cellSizeCache: stateCache} = this.state;
      const {cellSizeCache: propsCache, fixedWidth, unpinnedColumns} = this.props;
      if (!stateCache || !propsCache) return;
      // TODO better handling this
      const width = fixedWidth ? fixedWidth : document.getElementById('dataset-modal').clientWidth; // - datadot - scrollbar
      const sumStateCellSizes = getSizeSum(stateCache);
      const lastCell = unpinnedColumns[unpinnedColumns.length - 1];

      // If the cells are too small lets scale the final cell
      if (sumStateCellSizes < width) {
        return this.setState({
          cellSizeCache: expandLastCell(stateCache, width, sumStateCellSizes, lastCell)
        });
      }

      // If we have shrunk the browser & we already upscaled our cells lets downscale to atmost their default
      const sumPropsCellSizes = getSizeSum(propsCache);
      if (sumStateCellSizes > width && sumStateCellSizes > sumPropsCellSizes) {
        return this.setState({
          cellSizeCache: shrinkFinalCell(propsCache, width, sumPropsCellSizes, lastCell)
        });
      }
    };

    scaleCellsToWidth = debounce(this.doScaleCellsToWidth, 300);

    render() {
      const {rowCount, pinnedColumns, unpinnedColumns, hoverHighlight, theme = {}} = this.props;

      const {cellSizeCache, hover, moreOptionsColumn} = this.state;
      const pinnedColumnsWidth = pinnedColumns.reduce(
        (acc, val) => acc + get(cellSizeCache, val, 0),
        0
      );

      const hasPinnedColumns = Boolean(pinnedColumns.length);
      const {headerRowHeight = defaultHeaderRowHeight, rowHeight = defaultRowHeight} = theme;

      const hoverCell = hoverHighlight ? this.hoverCell : null;
      const headerGridProps = {
        cellSizeCache,
        className: 'header-grid',
        height: headerRowHeight,
        rowCount: 1,
        rowHeight: headerRowHeight
      };

      const dataGridProps = {
        cellSizeCache,
        overscanColumnCount,
        overscanRowCount,
        rowCount,
        rowHeight
      };

      return (
        <Container className="screenshot" hoverHighlight={hoverHighlight}>
          <ScrollSync>
            {({onScroll, scrollLeft, scrollTop}) => {
              return (
                <div className="results-table-wrapper">
                  {hasPinnedColumns && (
                    <div key="pinned-columns" className="pinned-columns grid-row">
                      <TableSection
                        classList={{
                          header: 'pinned-columns--header pinned-grid-container',
                          rows: 'pinned-columns--rows pinned-grid-container'
                        }}
                        isPinned
                        columns={pinnedColumns}
                        headerGridProps={headerGridProps}
                        fixedWidth={pinnedColumnsWidth}
                        onScroll={args => onScroll({...args, scrollLeft})}
                        scrollTop={scrollTop}
                        dataGridProps={dataGridProps}
                        setGridRef={pinnedGrid => (this.pinnedGrid = pinnedGrid)}
                        columnWidth={columnWidthFunction(pinnedColumns, cellSizeCache)}
                        headerCellRender={renderHeaderCell(
                          pinnedColumns,
                          true,
                          this.props,
                          this.toggleMoreOptions,
                          moreOptionsColumn
                        )}
                        dataCellRender={renderDataCell(
                          pinnedColumns,
                          true,
                          this.props,
                          hover,
                          hoverCell
                        )}
                      />
                    </div>
                  )}
                  <div
                    key="unpinned-columns"
                    style={{
                      marginLeft: `${hasPinnedColumns ? `${pinnedColumnsWidth}px` : '0'}`
                    }}
                    className="unpinned-columns grid-column"
                  >
                    <TableSection
                      classList={{
                        header: 'unpinned-columns--header unpinned-grid-container',
                        rows: 'unpinned-columns--rows unpinned-grid-container'
                      }}
                      isPinned={false}
                      columns={unpinnedColumns}
                      headerGridProps={headerGridProps}
                      fixedWidth={false}
                      onScroll={onScroll}
                      scrollTop={scrollTop}
                      scrollLeft={scrollLeft}
                      dataGridProps={dataGridProps}
                      setGridRef={unpinnedGrid => (this.unpinnedGrid = unpinnedGrid)}
                      columnWidth={columnWidthFunction(unpinnedColumns, cellSizeCache)}
                      headerCellRender={renderHeaderCell(
                        unpinnedColumns,
                        false,
                        this.props,
                        this.toggleMoreOptions,
                        moreOptionsColumn
                      )}
                      dataCellRender={renderDataCell(
                        unpinnedColumns,
                        false,
                        this.props,
                        hover,
                        hoverCell
                      )}
                    />
                  </div>
                </div>
              );
            }}
          </ScrollSync>
        </Container>
      );
    }
  }

  return withTheme(polyfill(DataTable));
}

export default DataTableFactory;
