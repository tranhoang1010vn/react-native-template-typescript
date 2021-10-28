// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

import React from 'react'
import { View } from 'react-native'

import style from './style'

interface Props {
  children: React.Component
}

const CenterView = ({ children }: Props) => {
  return <View style={style.main}>{children}</View>
}

CenterView.defaultProps = {
  children: null
}

CenterView.propTypes = {
  children: PropTypes.node
}

export default CenterView
