import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Dropdown from './Dropdown';
import Button from './Button';
import './style.css';
import Menu from 'antd/lib/menu';

interface AppProps { }
export enum DimensionType {
  DIM_3D = '3d',
  DIM_2D = '2d',
}
interface Props {
  taskID: number;
  taskMode: string;
  bugTracker: string;
  loaders: any[];
  dumpers: any[];
  loadActivity: string | null;
  inferenceIsActive: boolean;
  taskDimension: DimensionType;
  onUploadAnnotations: (format: string, file: File) => void;
  exportIsActive: boolean;
}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Dropdown
      click_element={click => 
      <Button click={click}
      />
      }>
      menu
      </Dropdown>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
