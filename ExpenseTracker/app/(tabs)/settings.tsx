import React, { useState } from 'react'; 
import { useTheme } from '@/context/ThemeContext';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'

export default function SettingsScreen() {
   const [notifications, setNotifications] = useState(true); 
   const { darkMode, setDarkMode, theme } = useTheme();

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
          <Text style={[styles.headerTitle, { color: theme.text }]}>
            Settings
          </Text>

          {/* Profile Card */}
          <Pressable
            style={[
              styles.profileCard,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <View style={styles.profileLeft}>
              <View
                style={[
                  styles.avatar,
                  { backgroundColor: theme.card2 },
                ]}
              >
                <Text style={styles.avatarText}>👨</Text>
              </View>

              <View>
                <Text style={[styles.profileName, { color: theme.text }]}>
                  John Doe
                </Text>
                <Text
                  style={[styles.profileEmail, { color: theme.subText }]}
                >
                  john.doe@email.com
                </Text>
              </View>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color={theme.subText}
            />
          </Pressable>

          {/* Preferences */}
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Preferences
          </Text>

          <View
            style={[
              styles.card,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            {/* Currency */}
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="cash-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <Text style={[styles.rowTitle, { color: theme.text }]}>
                  Currency
                </Text>
              </View>

              <View style={styles.rowRight}>
                <Text style={[styles.rowValue, { color: theme.subText }]}>
                  PHP (₱)
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={theme.subText}
                />
              </View>
            </Pressable>

            <View
              style={[
                styles.divider,
                { backgroundColor: theme.divider },
              ]}
            />

            {/* Categories */}
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="grid-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <View>
                  <Text style={[styles.rowTitle, { color: theme.text }]}>
                    Categories
                  </Text>
                  <Text
                    style={[
                      styles.rowSubtitle,
                      { color: theme.subText },
                    ]}
                  >
                    Manage your categories
                  </Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.subText}
              />
            </Pressable>

            <View
              style={[
                styles.divider,
                { backgroundColor: theme.divider },
              ]}
            />

            {/* Payment Methods */}
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="wallet-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <View>
                  <Text style={[styles.rowTitle, { color: theme.text }]}>
                    Payment Methods
                  </Text>
                  <Text
                    style={[
                      styles.rowSubtitle,
                      { color: theme.subText },
                    ]}
                  >
                    Manage accounts & cards
                  </Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.subText}
              />
            </Pressable>

            <View
              style={[
                styles.divider,
                { backgroundColor: theme.divider },
              ]}
            />

            {/* Notifications */}
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <Text style={[styles.rowTitle, { color: theme.text }]}>
                  Notifications
                </Text>
              </View>

              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{
                  false: theme.border,
                  true: theme.primary,
                }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View
              style={[
                styles.divider,
                { backgroundColor: theme.divider },
              ]}
            />

            {/* Dark Mode */}
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="moon-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <Text style={[styles.rowTitle, { color: theme.text }]}>
                  Dark Mode
                </Text>
              </View>

              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{
                  false: theme.border,
                  true: theme.primary,
                }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          {/* Data */}
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Data
          </Text>

          <View
            style={[
              styles.card,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="download-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <View>
                  <Text style={[styles.rowTitle, { color: theme.text }]}>
                    Export Data
                  </Text>
                  <Text
                    style={[
                      styles.rowSubtitle,
                      { color: theme.subText },
                    ]}
                  >
                    Download your data
                  </Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.subText}
              />
            </Pressable>

            <View
              style={[
                styles.divider,
                { backgroundColor: theme.divider },
              ]}
            />

            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="cloud-upload-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <View>
                  <Text style={[styles.rowTitle, { color: theme.text }]}>
                    Import Data
                  </Text>
                  <Text
                    style={[
                      styles.rowSubtitle,
                      { color: theme.subText },
                    ]}
                  >
                    Import from backup
                  </Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.subText}
              />
            </Pressable>
          </View>

          {/* About */}
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            About
          </Text>

          <View
            style={[
              styles.card,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Pressable style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: theme.card2 },
                  ]}
                >
                  <Ionicons
                    name="information-circle-outline"
                    size={22}
                    color={theme.icon}
                  />
                </View>

                <View>
                  <Text style={[styles.rowTitle, { color: theme.text }]}>
                    About the App
                  </Text>
                  <Text
                    style={[
                      styles.rowSubtitle,
                      { color: theme.subText },
                    ]}
                  >
                    Version 1.0.0
                  </Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.subText}
              />
            </Pressable>
          </View>
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

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 24,
  },

  profileCard: {
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,

    // subtle shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  avatarText: {
    fontSize: 32,
  },

  profileName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },

  profileEmail: {
    fontSize: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },

  card: {
    borderRadius: 24,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 28,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  rowTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  rowSubtitle: {
    fontSize: 14,
    marginTop: 3,
  },

  rowValue: {
    fontSize: 15,
    fontWeight: '600',
    marginRight: 6,
  },

  divider: {
    height: 1,
    marginLeft: 74,
  },
});