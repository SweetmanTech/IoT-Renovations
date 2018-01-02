const { createElement, render, Component } = preact; // or React
const h = createElement;

class AvailableServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: {
              name: ["basic", "secure", "assisted"],
              includes: ["smart listener, 4xSmart Outlet, 4x Smart Switch", "smart listeners, Smart Cameras, Smart Locks, Motion Detectors, Smart Lights", "smart listener, smart lights, smart outlets, smart switches, smart thermostat, smart tv"]
            }
        }
    }

    render() {

      return (
          h('table', {
            className: "table"}, [
            h('thead', null,
              h('tr', {for: "addBookTitle"}, [
                h('th', {scope:"col"}, "Service"),
                h('th', {scope:"col"}, "Includes")
              ])
            ),
            h('tbody', {className:"field",
                        id: "services-body"},this.getTableBody()
            )
          ])
      )
    }

    getTableBody() {
      var body=[];
      for (var i = 0; i < this.state.services.name.length; i++) {
        body[i] = h('tr', null, [
          h('td', {scope:"col"}, this.state.services.name[i]),
          h('td', {scope:"col"}, this.state.services.includes[i])
      ])
      }
      return body;
    }
}

// Render our AvailableServices to our container / wrapper element
render(h(AvailableServices), document.getElementById('available-services'));
