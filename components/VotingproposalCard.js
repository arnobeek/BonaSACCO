import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function VotingproposalCard({ proposal }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{proposal.title}</Text>
      </View>

      <Text style={styles.proposer}>Proposed by {proposal.proposer}</Text>
      <Text style={styles.description}>{proposal.description}</Text>

      <View style={styles.tags}>
        <Text
          style={[
            styles.tag,
            { backgroundColor: proposal.type === 'Financial' ? '#d0ebff' : '#fff4e6' },
          ]}
        >
          {proposal.type}
        </Text>
        <Text style={styles.commentIcon}>💬 15</Text>
        <Text style={styles.commentIcon}>📎 2</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.forBar, { flex: proposal.for }]} />
          <View style={[styles.againstBar, { flex: proposal.against }]} />
        </View>
        <Text style={styles.resultText}>
          For: {proposal.for}  Against: {proposal.against}
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.voteFor}>
          <Text style={styles.buttonText}>✅ Vote For</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.voteAgainst}>
          <Text style={styles.buttonText}>❌ Vote Against</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontWeight: 'bold', fontSize: 16 },
  status: { color: 'gray' },
  proposer: { fontStyle: 'italic', marginTop: 4 },
  description: { marginTop: 6, color: '#444' },
  tags: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  tag: {
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    fontSize: 12,
    color: '#000',
  },
  commentIcon: {
    fontSize: 12,
    marginLeft: 6,
    color: '#555',
  },
  progressContainer: {
    marginTop: 12,
  },
  progressBar: {
    flexDirection: 'row',
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    overflow: 'hidden',
  },
  forBar: {
    backgroundColor: '#4caf50',
  },
  againstBar: {
    backgroundColor: '#f44336',
  },
  resultText: {
    marginTop: 6,
    fontSize: 12,
    color: '#333',
  },
  quorum: {
    fontSize: 12,
    color: '#888',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  voteFor: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  voteAgainst: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
