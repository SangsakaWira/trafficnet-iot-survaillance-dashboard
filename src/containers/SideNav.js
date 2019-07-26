import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import DashCard from 'containers/Dascard'
import {
  Navbar,
  Nav,
  Col,
  Row,Container
} from 'react-bootstrap'

import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  ItemGroup,
  Item,
  Label
} from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
    <Grid textAlign='center'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header as='h3'>New Content Awaits</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid columns={3} divided>
      </Grid>
    </Grid>
  </Sidebar>
)

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
    height="100%"
    style={{ background: "#09314C" }}
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class SideNav extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }))

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <div style={{ height: '100vh' }}>
           {vertical ? (
            <HorizontalSidebar animation={animation} direction={direction} visible={visible} />
          ) : null}
          {vertical ? null : (
            <VerticalSidebar animation={animation} direction={direction} visible={visible} />
          )}
            <Sidebar.Pusher dimmed={dimmed && visible}>
              <Segment basic>
                <Navbar style={{ margin: "-15px", background: "#09314C" }}>
                  <Navbar.Brand href="#home" style={{ color: "#FFFFFF" }} onClick={this.handleAnimationChange('push')}>React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ color: "#FFFFFF"}}>
                      <Nav.Link href="#home" style={{ color: "#FFFFFF" }}>Home</Nav.Link>
                      <Nav.Link href="#link" style={{ color: "#FFFFFF" }}>Link</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <ItemGroup style={{padding:"10px"}}>
                  <Container>
                  <Row>
                      <Col style={{float:"left",width:"25%"}}>
                        <div class="ui card">
                          <div class="content">
                            <div class="header">Project Report - April</div>
                            <div class="meta">ROI: 30%</div>
                            <div class="description">
                              Leverage agile frameworks to provide a robust synopsis for high level overviews.
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col style={{float:"left",width:"25%"}}>
                        <div class="ui card">
                          <div class="content">
                            <div class="header">Project Report - April</div>
                            <div class="meta">ROI: 30%</div>
                            <div class="description">
                              Leverage agile frameworks to provide a robust synopsis for high level overviews.
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col style={{float:"left",width:"25%"}}>
                        <div class="ui card">
                          <div class="content">
                            <div class="header">Project Report - April</div>
                            <div class="meta">ROI: 30%</div>
                            <div class="description">
                              Leverage agile frameworks to provide a robust synopsis for high level overviews.
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col style={{float:"left",width:"25%"}}>
                        <div class="ui card">
                          <div class="content">
                            <div class="header">Project Report - April</div>
                            <div class="meta">ROI: 30%</div>
                            <div class="description">
                              Leverage agile frameworks to provide a robust synopsis for high level overviews.
                            </div>
                          </div>
                        </div>
                      </Col>
                  </Row>
                </Container>
                <Container style={{ padding: "20px"}}>
                <ItemGroup>
                  <Item style={{ padding: "20px", background: "#E8E8E8" }}>
                    <Item.Content >
                      <Item.Header as='a'>12 Years a Slave</Item.Header>
                      <Item.Meta>
                        <span className='cinema'>Union Square 14</span>
                      </Item.Meta>
                      <Item.Description>The standard chunk of Lorem Finibus Bonorum et Malorum"
                      by Cicero are also reproduced in their exact original form, accompanied by H. Rackham.</Item.Description>
                      <Item.Extra>
                        <Label>IMAX</Label>
                        <Label icon='globe' content='Additional Languages' />
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                  <Item style={{ padding: "20px", background: "#E8E8E8" }}>
                    <Item.Content >
                      <Item.Header as='a'>12 Years a Slave</Item.Header>
                      <Item.Meta>
                        <span className='cinema'>Union Square 14</span>
                      </Item.Meta>
                      <Item.Description>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                      by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Item.Description>
                      <Item.Extra>
                        <Label>IMAX</Label>
                        <Label icon='globe' content='Additional Languages' />
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                  </ItemGroup>
                </Container>
                </ItemGroup>
            </Segment>
          </Sidebar.Pusher>
        </div>
        </Sidebar.Pushable>
      </div>
    )
  }
}