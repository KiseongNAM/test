filename="$1"
if [ -a $filename ]; then
	echo "File '$filename' exists in current directory"
else
	echo "File '$filename' does nor exists in current directory"
fi
