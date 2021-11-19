import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { map, capitalize } from 'lodash';

const Stats = ({ stats }) => {

  const bgStyles = (num) => {
    const color = num > 49 ? "#00ac17": "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {/* DONDE VAMOS A MOSTRAR LAS ESTADISTICAS */}
      {
        map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}> {capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              {/* BARRA */}
              <View style={[styles.bar, bgStyles(item.base_stat)]}></View>
            </View>
          </View>

        </View>)
        )
      }
    </View>
  )
}

export default Stats;

const styles = StyleSheet.create({
  bar: {
    height: 5,
    borderRadius: 20
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  blockTitle: {
    width: '30%'
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5
  },
  statName: {
    fontSize: 12,
    color: '#6b6b6b'
  },
  number: {
    width: "12%",
    fontSize: 12
  }
});
