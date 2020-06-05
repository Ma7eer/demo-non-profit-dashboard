import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'
import { Navbar, PanelGroup, Panel } from 'react-bootstrap'

// core components
import { routes } from '../router/routes'

import elementLogo from '../images/element-logo.png'
import ToastrBanner from '../components/Message'
import Message from '../data/toastrMessages'

let primaryColor = '#25aae1'
// '#16a085'

let styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '38px',
    height: '32px',
    left: '0px',
    top: '22px'
  },
  bmBurgerBars: {
    background: '#242b32'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '18px',
    width: '18px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    left: '0',
    padding: '0',
    width: '390px'
  },
  bmMenu: {
    background: '#242b32',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

let panelStyle = {
  backgroundColor: '#242b32',
  border: 'none',
  color: 'white',
  outline: 'none'
}

export default class ControlledPanelGroup extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      activeKey: ''
    }
  }

  handleSelect(activeKey) {
    this.setState({ activeKey })
  }
  render() {
    return (
      <>
        <Navbar style={{ backgroundColor: primaryColor }}>
          <Navbar.Header>
            <Menu styles={styles}>
              <img
                src={elementLogo}
                alt="logo"
                width="100%"
                height="100px"
                style={{ backgroundColor: 'white', border: '10px solid white' }}
              />
              <br />
              <PanelGroup
                accordion
                id="accordion-controlled-example"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
                style={{ textAlign: 'right', outline: 'none' }}
              >
                {routes.map(route =>
                  route.collapsible ? (
                    <Panel eventKey={route.key} style={panelStyle}>
                      <Panel.Heading style={panelStyle}>
                        <Panel.Title toggle>
                          <strong>{route.title}</strong>&nbsp;
                          {'  '}
                          <i className={route.icon} />
                        </Panel.Title>
                      </Panel.Heading>
                      {route.nestedRoutes.map((nestedRoute, index) =>
                        nestedRoute.isExternalLink ? (
                          <Panel.Body collapsible>
                            <a
                              href={nestedRoute.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: 'white', marginRight: '8%' }}
                            >
                              {nestedRoute.title}
                              <i className="fas fa-angle-double-left" />
                            </a>
                          </Panel.Body>
                        ) : (
                          <Panel.Body collapsible key={index}>
                            <Link
                              to={nestedRoute.path}
                              style={{ color: 'white', marginRight: '8%' }}
                            >
                              {nestedRoute.title}{' '}
                              <i className={nestedRoute.icon} />
                            </Link>
                          </Panel.Body>
                        )
                      )}
                    </Panel>
                  ) : (
                    <Panel
                      key={route.key}
                      eventKey={route.key}
                      style={panelStyle}
                    >
                      <Panel.Heading style={panelStyle}>
                        <Panel.Title>
                          <Link to={route.path} style={{ color: 'white' }}>
                            <strong>{route.title}</strong>&nbsp;{' '}
                            <i className={route.icon} />
                          </Link>
                        </Panel.Title>
                      </Panel.Heading>
                    </Panel>
                  )
                )}

                {localStorage.getItem('jwtToken') &&
                localStorage.getItem('admin') === 'true' ? (
                  <>
                    <Panel eventKey="5" style={panelStyle}>
                      <Panel.Heading
                        style={panelStyle}
                        onClick={() =>
                          ToastrBanner('error', Message.notAuthorized)
                        }
                      >
                        <strong>
                          <a
                            href="https://compassionate-bartik-d3fca5.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}
                            // onClick={() =>
                            //   ToastrBanner('error', Message.notAuthorized)
                            // }
                          >
                            مرفقات الجمعية
                          </a>
                          &nbsp; <i className="fas fa-folder" />
                        </strong>
                      </Panel.Heading>
                    </Panel>
                    <Panel eventKey="6" style={panelStyle}>
                      <Panel.Heading style={panelStyle}>
                        <Panel.Title toggle>
                          <Link
                            to="#"
                            style={{ color: 'white' }}
                            onClick={() =>
                              ToastrBanner('error', Message.notAuthorized)
                            }
                          >
                            <strong>قائمة المستخدمين </strong>&nbsp;{' '}
                            <i className="fas fa-user" />
                          </Link>
                        </Panel.Title>
                      </Panel.Heading>
                    </Panel>
                  </>
                ) : null}
              </PanelGroup>
            </Menu>
          </Navbar.Header>
          <Navbar.Brand>
            <Navbar.Text
              pullRight
              style={{ cursor: 'pointer', color: '#242b32' }}
            >
              نسخة تجريبية <i className="fas fa-vial" />
            </Navbar.Text>
          </Navbar.Brand>
        </Navbar>
        <div className="container-fluid">{this.props.children}</div>
      </>
    )
  }
}

ControlledPanelGroup.propTypes = {
  children: PropTypes.any
}
