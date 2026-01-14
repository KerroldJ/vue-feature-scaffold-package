#!/bin/bash

# Example: Test the CLI locally

echo "Testing vue-feature-scaffold CLI..."
echo ""

# Test 1: Standard usage with npm script
echo "Test 1: Standard feature generation"
npm run generate products -- --dir examples

# Test 2: Laravel-style path
echo ""
echo "Test 2: Laravel resources path"
npm run generate orders -- --dir resources/js/pages

# Test 3: Deeply nested Laravel module path
echo ""
echo "Test 3: Nested module path (HRIS example)"
npm run generate departments -- --dir HRIS/web-admin/resources/js/pages

echo ""
echo "Generated structures:"
echo "- examples/products/"
tree examples/products 2>/dev/null || find examples/products -type f
echo ""
echo "- resources/js/pages/orders/"
tree resources/js/pages/orders 2>/dev/null || find resources/js/pages/orders -type f

echo ""
echo "✅ All tests complete! Check the output directories for generated files"
