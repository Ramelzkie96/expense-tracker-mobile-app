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
import { useTheme } from '@/context/ThemeContext';

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
  const { darkMode, theme } = useTheme();
  return (
  <SafeAreaView
    style={[styles.safeArea, { backgroundColor: theme.background }]}
  >
    <View
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: theme.text }]}>
            Budgets
          </Text>

          <Pressable
            style={[
              styles.monthButton,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.monthText,
                { color: theme.subText },
              ]}
            >
              This Month
            </Text>

            <Ionicons
              name="chevron-down"
              size={16}
              color={theme.subText}
            />
          </Pressable>
        </View>

        {/* Overall Budget */}
        <View
          style={[
            styles.summaryCard,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text
            style={[
              styles.summaryTitle,
              { color: theme.subText },
            ]}
          >
            Overall Budget
          </Text>

          <View style={styles.summaryRow}>
            <Text
              style={[
                styles.leftAmount,
                { color: theme.text },
              ]}
            >
              ₱8,300.00
            </Text>

            <Text
              style={[
                styles.leftText,
                { color: theme.subText },
              ]}
            >
              {' '}left
            </Text>
          </View>

          <Text
            style={[
              styles.summarySub,
              { color: theme.subText },
            ]}
          >
            ₱10,500.00 / ₱18,800.00
          </Text>

          <View style={styles.progressRow}>
            <View
              style={[
                styles.progressTrack,
                { backgroundColor: theme.card2 },
              ]}
            >
              <View
                style={[
                  styles.progressFill,
                  {
                    width: '56%',
                    backgroundColor: theme.primary,
                  },
                ]}
              />
            </View>

            <Text
              style={[
                styles.progressPercent,
                { color: theme.subText },
              ]}
            >
              56%
            </Text>
          </View>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Your Budgets
          </Text>

          <Pressable
            style={[
              styles.addBudgetButton,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Ionicons
              name="add"
              size={18}
              color={theme.primary}
            />

            <Text
              style={[
                styles.addBudgetText,
                { color: theme.primary },
              ]}
            >
              Add Budget
            </Text>
          </Pressable>
        </View>

        {/* Budget Cards */}
        {budgets.map((item) => (
          <View
            key={item.title}
            style={[
              styles.budgetCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <View style={styles.budgetTop}>
              <View style={styles.budgetLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Text style={styles.emoji}>{item.icon}</Text>
                </View>

                <View>
                  <Text
                    style={[
                      styles.budgetTitle,
                      { color: theme.text },
                    ]}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={[
                      styles.budgetSub,
                      { color: theme.subText },
                    ]}
                  >
                    {item.spent} / {item.limit}
                  </Text>
                </View>
              </View>

              <Text
                style={[
                  styles.percentText,
                  { color: theme.text },
                ]}
              >
                {item.percent}%
              </Text>
            </View>

            <View
              style={[
                styles.progressTrackLarge,
                { backgroundColor: theme.card2 },
              ]}
            >
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
  },

  monthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
  },

  monthText: {
    fontSize: 15,
    fontWeight: '600',
    marginRight: 4,
  },

  summaryCard: {
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    marginBottom: 28,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
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
    fontWeight: '600',
  },

  summarySub: {
    fontSize: 16,
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
    borderRadius: 999,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 999,
  },

  progressPercent: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '700',
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
  },

  addBudgetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
  },

  addBudgetText: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 4,
  },

  budgetCard: {
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
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
  },

  budgetSub: {
    fontSize: 15,
    marginTop: 4,
    fontWeight: '500',
  },

  percentText: {
    fontSize: 18,
    fontWeight: '700',
  },

  progressTrackLarge: {
    height: 10,
    borderRadius: 999,
    overflow: 'hidden',
  },

  progressFillLarge: {
    height: '100%',
    borderRadius: 999,
  },
});