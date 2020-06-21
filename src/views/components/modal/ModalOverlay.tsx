import React, {Component} from 'react';
import {Text, StyleProp, ViewStyle} from 'react-native';
import Modal, {ModalContent, SlideAnimation} from 'react-native-modals';

export interface Props {
  title?: string;
  txtCancel?: string;
  txtDone?: string;
  position: 'center' | 'bottom';
  onCancel?(): void;
  onDone?(): void;
  modalStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  [key: string]: any;
}

export interface State {
  visible: boolean;
}

export default class ModalOverlay extends Component<Props, State> {
  state: Readonly<State> = {
    visible: false,
  };

  static defaultProps: Props = {
    title: 'Swipeable Modal',
    txtCancel: 'CANCEL',
    txtDone: 'OK',
    position: 'center',
    children: <Text>Content Modal Here!</Text>,
  };

  open = () => {
    this.setState({visible: true});
  };

  close = () => {
    this.setState({visible: false});
  };

  onCancel = () => {
    const {onCancel} = this.props;
    onCancel && onCancel();
    this.close;
  };

  onDone = () => {
    const {onDone} = this.props;
    onDone && onDone();
    this.close;
  };

  contentModal = () => (
    <ModalContent {...this.props}>{this.props.children}</ModalContent>
  );

  render() {
    const {position, modalStyle} = this.props;
    let myModal = (
      <Modal
        onDismiss={this.close}
        dismissOnTouchOutside={false}
        width={0.9}
        overlayOpacity={0.6}
        visible={this.state.visible}
        rounded
        actionsBordered
        onSwipeOut={this.close}
        onTouchOutside={this.close}
        modalAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        modalStyle={modalStyle}>
        {this.contentModal()}
      </Modal>
    );
    if (position == 'bottom') {
      myModal = (
        <Modal.BottomModal
          visible={this.state.visible}
          // onTouchOutside={this.close}
        >
          {this.contentModal()}
        </Modal.BottomModal>
      );
    }
    return myModal;
  }
}
