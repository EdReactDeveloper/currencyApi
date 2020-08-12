import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home';
import { getCurrencyAction } from '../store/actions/currency';

class HomeContainer extends Component {
  state = {
    currency: null,
    isFetching: true
  }

  componentDidMount() {
    const { getCurrencyAction } = this.props
    getCurrencyAction()
    this.getCurs = setInterval(() => {
      getCurrencyAction()
    }, 10000)
  }
  

  componentDidUpdate(prevProps) {
    const prevCur = JSON.stringify(prevProps.currency)
    const newCur = JSON.stringify(this.props.currency)

    if (prevCur !== newCur) {
      const { isFetching, currency } = this.props
      this.setState({ currency, isFetching })
    }
  }

  componentWillUnmount() {
    this.getCurs()
  }

  render() {
    const { isFetching, currency } = this.state
    return <Home isFetching={isFetching} currency={currency} />
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency.currency,
    isFetching: state.currency.isfetchingCur
  }
}

export default connect(mapStateToProps, { getCurrencyAction })(HomeContainer)