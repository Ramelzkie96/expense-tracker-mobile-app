import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';

const budgets = [
  {
    icon: '🍔',
    title: 'Food & Dining',
    spent: '₱4,200',
    limit: '₱6,000',
    percent: 70,
    color: '#F59E0B',
  },
  {
    icon: '🛒',
    title: 'Shopping',
    spent: '₱2,500',
    limit: '₱3,000',
    percent: 83,
    color: '#2563EB',
  },
  {
    icon: '🚌',
    title: 'Transportation',
    spent: '₱1,800',
    limit: '₱2,500',
    percent: 72,
    color: '#22C55E',
  },
  {
    icon: '🎬',
    title: 'Entertainment',
    spent: '₱800',
    limit: '₱2,000',
    percent: 40,
    color: '#7C3AED',
  },
  {
    icon: '🏠',
    title: 'Housing',
    spent: '₱1,200',
    limit: '₱5,000',
    percent: 24,
    color: '#F43F5E',
  },
];

export default function BudgetsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Budgets</Text>

            <Pressable style={styles.monthButton}>
              <Text style={styles.monthText}>This Month</Text>
              <Ionicons name="chevron-down" size={16} color="#6B7280" />
            </Pressable>
          </View>

          {/* Overall Budget */}
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Overall Budget</Text>

            <View style={styles.summaryRow}>
              <Text style={styles.leftAmount}>₱8,300.00</Text>
              <Text style={styles.leftText}> left</Text>
            </View>

            <Text style={styles.summarySub}>₱10,500.00 / ₱18,800.00</Text>

            <View style={styles.progressRow}>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: '56%' }]} />
              </View>

              <Text style={styles.progressPercent}>56%</Text>
            </View>
          </View>

          {/* Section Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Budgets</Text>

            <Pressable style={styles.addBudgetButton}>
              <Ionicons name="add" size={18} color={Colors.primary} />
              <Text style={styles.addBudgetText}>Add Budget</Text>
            </Pressable>
          </View>

          {/* Budget Cards */}
          {budgets.map((item) => (
            <View key={item.title} style={styles.budgetCard}>
              <View style={styles.budgetTop}>
                <View style={styles.budgetLeft}>
                  <View style={styles.iconCircle}>
                    <Text style={styles.emoji}>{item.icon}</Text>
                  </View>

                  <View>
                    <Text style={styles.budgetTitle}>{item.title}</Text>
                    <Text style={styles.budgetSub}>
                      {item.spent} / {item.limit}
                    </Text>
                  </View>
                </View>

                <Text style={styles.percentText}>{item.percent}%</Text>
              </View>

              <View style={styles.progressTrackLarge}>
                <View
                  style={[
                    styles.progressFillLarge,
                    {
                      width: `${item.percent}%`,
                      backgroundColor: item.color,
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  container: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
  },

  monthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },

  monthText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
    marginRight: 4,
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 10,
  },

  leftAmount: {
    fontSize: 38,
    fontWeight: '800',
    color: '#16A34A',
  },

  leftText: {
    fontSize: 20,
    color: '#6B7280',
    fontWeight: '600',
  },

  summarySub: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 18,
  },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 999,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#16A34A',
    borderRadius: 999,
  },

  progressPercent: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    width: 42,
    textAlign: 'right',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },

  addBudgetButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  addBudgetText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 4,
  },

  budgetCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginBottom: 18,
  },

  budgetTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  budgetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  emoji: {
    fontSize: 24,
  },

  budgetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  budgetSub: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 4,
    fontWeight: '500',
  },

  percentText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
  },

  progressTrackLarge: {
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 999,
    overflow: 'hidden',
  },

  progressFillLarge: {
    height: '100%',
    borderRadius: 999,
  },
});