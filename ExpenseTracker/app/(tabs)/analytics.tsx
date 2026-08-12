import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PieChart, LineChart } from 'react-native-gifted-charts';
import { Colors } from '@/constants/colors';

const { width } = Dimensions.get('window');

const pieData = [
  { value: 4200, color: '#F59E0B' },
  { value: 2500, color: '#2563EB' },
  { value: 1800, color: '#22C55E' },
  { value: 1000, color: '#7C3AED' },
  { value: 1000, color: '#9CA3AF' },
];

const lineData = [
  { value: 2500 },
  { value: 5000 },
  { value: 10000 },
  { value: 8500 },
  { value: 9500 },
  { value: 7000 },
  { value: 10000 },
  { value: 11500 },
  { value: 9800 },
  { value: 13000 },
  { value: 11200 },
  { value: 13500 },
  { value: 11000 },
];

const categories = [
  { name: 'Food & Dining', amount: '₱4,200.00', percent: '40%', color: '#F59E0B' },
  { name: 'Shopping', amount: '₱2,500.00', percent: '24%', color: '#2563EB' },
  { name: 'Transportation', amount: '₱1,800.00', percent: '17%', color: '#22C55E' },
  { name: 'Entertainment', amount: '₱1,000.00', percent: '10%', color: '#7C3AED' },
  { name: 'Others', amount: '₱1,000.00', percent: '9%', color: '#9CA3AF' },
];

export default function AnalyticsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Analytics</Text>

            <Pressable style={styles.monthButton}>
              <Text style={styles.monthText}>This Month</Text>
              <Ionicons name="chevron-down" size={16} color="#6B7280" />
            </Pressable>
          </View>

          {/* Total Spent Card */}
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Total Spent</Text>
            <Text style={styles.summaryAmount}>₱10,500.00</Text>

            <View style={styles.summaryTrend}>
              <Ionicons name="arrow-down" size={16} color="#EF4444" />
              <Text style={styles.summaryTrendText}>12% vs last month</Text>
            </View>
          </View>

          {/* Spending Breakdown */}
          <Text style={styles.sectionTitle}>Spending Breakdown</Text>

          <View style={styles.chartCard}>
            <View style={styles.pieContainer}>
              <PieChart
                data={pieData}
                donut
                radius={92}
                innerRadius={56}
                centerLabelComponent={() => (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.centerAmount}>₱10,500</Text>
                    <Text style={styles.centerLabel}>Total</Text>
                  </View>
                )}
              />
            </View>

            <View style={styles.legend}>
              {categories.map((item) => (
                <View key={item.name} style={styles.legendRow}>
                  <View style={styles.legendLeft}>
                    <View
                      style={[styles.legendDot, { backgroundColor: item.color }]}
                    />
                    <Text style={styles.legendName}>{item.name}</Text>
                  </View>

                  <View style={styles.legendRight}>
                    <Text style={styles.legendAmount}>{item.amount}</Text>
                    <Text style={styles.legendPercent}>{item.percent}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Spending Trend */}
          <Text style={styles.sectionTitle}>Spending Trend</Text>

          <View style={styles.chartCard}>
            <View style={styles.yLabels}>
              <Text style={styles.yLabel}>₱15K</Text>
              <Text style={styles.yLabel}>₱10K</Text>
              <Text style={styles.yLabel}>₱5K</Text>
              <Text style={styles.yLabel}>₱0</Text>
            </View>

            <LineChart
              data={lineData}
              width={width - 120}
              height={220}
              color="#22C55E"
              thickness={3}
              hideDataPoints
              curved
              areaChart
              startFillColor="#22C55E"
              endFillColor="#22C55E"
              startOpacity={0.18}
              endOpacity={0.02}
              hideRules
              hideYAxisText
              hideAxesAndRules
              xAxisLabelsHeight={0}
            />

            <View style={styles.xLabels}>
              <Text style={styles.xLabel}>Aug 5</Text>
              <Text style={styles.xLabel}>Aug 12</Text>
              <Text style={styles.xLabel}>Aug 19</Text>
              <Text style={styles.xLabel}>Aug 26</Text>
              <Text style={styles.xLabel}>Aug 31</Text>
            </View>
          </View>
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
    marginBottom: 24,
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

  summaryLabel: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 10,
  },

  summaryAmount: {
    fontSize: 38,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 14,
  },

  summaryTrend: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryTrendText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#EF4444',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },

  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginBottom: 28,
  },

  pieContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },

  centerAmount: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
  },

  centerLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },

  legend: {
    gap: 14,
  },

  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  legendLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },

  legendName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },

  legendRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  legendAmount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    minWidth: 88,
    textAlign: 'right',
  },

  legendPercent: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6B7280',
    width: 36,
    textAlign: 'right',
  },

  yLabels: {
    position: 'absolute',
    left: 8,
    top: 20,
    bottom: 40,
    justifyContent: 'space-between',
  },

  yLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },

  xLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingLeft: 36,
  },

  xLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
});