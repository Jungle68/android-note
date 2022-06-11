import{_ as n,o as e,c as i,e as t}from"./app.e2a3b496.js";const l={},d=t(`<h1 id="\u5251\u6307offer-\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u5251\u6307offer-\u4E0B" aria-hidden="true">#</a> \u5251\u6307Offer(\u4E0B)</h1><p>\u5251\u6307Offer(\u4E0A)\u4E00\u5171\u662F23\u9053\u9898\u3002</p><ol start="24"><li><p>\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u540E\u5E8F\u904D\u5386\u5E8F\u5217<br> \u8F93\u5165\u4E00\u4E2A\u6574\u6570\u6570\u7EC4,\u5224\u65AD\u8BE5\u6570\u7EC4\u662F\u4E0D\u662F\u67D0\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u540E\u5E8F\u904D\u5386\u7684\u7ED3\u679C\u3002 \u662F\u5219\u8FD4\u56DE<code>true</code>,\u5426\u5219\u8FD4\u56DE<code>false</code>\u3002\u5047\u8BBE\u8F93\u5165\u7684\u6570\u7EC4\u7684\u4EFB\u610F\u4E24\u4E2A\u6570\u5B57\u90FD\u4E92\u4E0D\u76F8\u540C<br> \u601D\u8DEF: \u5728\u540E\u5E8F\u904D\u5386\u5F97\u5230\u7684\u5E8F\u5217\u4E2D\uFF0C\u6700\u540E\u4E00\u4E2A\u6570\u5B57\u662F\u6811\u7684\u6839\u8282\u70B9\u7684\u503C\u3002 \u6570\u7EC4\u4E2D\u524D\u9762\u7684\u6570\u5B57\u53EF\u4EE5\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A\u7B2C\u4E00\u90E8\u5206\u662F\u5DE6\u5B50\u6811\u7ED3\u70B9\u7684\u503C\uFF0C \u5B83\u4EEC\u90FD\u6BD4\u6839\u8282\u70B9\u7684\u503C\u5C0F\uFF1B\u7B2C\u4E8C\u90E8\u5206\u662F\u53F3\u5B50\u6811\u7ED3\u70B9\u7684\u503C\uFF0C\u4ED6\u4EEC\u90FD\u6BD4\u6839\u8282\u70B9\u7684\u503C\u5927\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Problem24 {
    public static void main(String[] args) {
		int[] array = { 5, 7, 6, 9, 11, 10, 8 };
		System.out.println(verfiySequence(array));
	}

	public static boolean verfiySequence(int[] array) {
		if (array == null || array.length == 0) {
			return false;
		}
		int length = array.length;
		// \u6700\u540E\u4E00\u4E2A\u662F\u6839\u8282\u70B9
		int root = array[length - 1];
		// \u5DE6\u53F3\u5B50\u6811\u7684\u5206\u754C\u70B9\uFF0C\u56E0\u4E3A\u5DE6\u5B50\u6811\u90FD\u662F\u5C0F\u4E8E\u6839\u8282\u70B9\u7684\uFF0C\u53F3\u5B50\u6811\u90FD\u662F\u5927\u4E8E\u7684\u3002
		int cut = 0;
		for (int i = 0; i &lt; length - 1; i++) {
			if (array[i] &gt; root) {
				// \u5230\u4E86\u53F3\u5B50\u6811\u7684\u5206\u754C\u70B9
				cut = i + 1;
				break;
			}
		}
		if (cut == 0) {
			// \u6CA1\u6709\u53F3\u5B50\u6811\uFF0C\u90FD\u662F\u5DE6\u5B50\u6811\uFF0C\u7136\u540E\u5C31\u7EE7\u7EED\u5224\u65AD\u9664\u4E86\u4E0A\u9762\u6839\u8282\u70B9\u540E\u7684\u5176\u4ED6\u6240\u6709\u8282\u70B9\uFF0C\u8FD9\u4E9B\u90FD\u662F\u5DE6\u5B50\u6811\u7684\u3002
			verfiySequence(Arrays.copyOfRange(array, 0, length - 1));
		} else {
			// \u6709\u53F3\u5B50\u6811\uFF0C\u5224\u65AD\u4ECE\u5206\u754C\u70B9\u5F00\u59CB\u540E\u7684\u6240\u6709\u6570\u662F\u4E0D\u662F\u90FD\u5927\u4E8E\u6839\u8282\u70B9\u3002
			for (int j = cut; j &lt; length - 1; j++) {
				if (array[j] &lt; root) {
					// \u6709\u4E0D\u5927\u4E8E\u6839\u8282\u70B9\u503C\u7684\u6570\uFF0C\u80AF\u5B9A\u662F\u9519\u8BEF\u7684\u3002
					return false;
				}
			}
		}
		boolean left = true;
		if (cut &gt; 0) {
			// \u5224\u65AD\u5DE6\u5B50\u6570\u91CC\u9762\u7684\u5143\u7D20\u662F\u5426\u90FD\u5BF9
			left = verfiySequence(Arrays.copyOfRange(array, 0, cut));
		}
		boolean right = true;
		if (cut &lt; length - 1) {
			// \u53F3\u5B50\u6811
			right = verfiySequence(Arrays.copyOfRange(array, cut, length - 1));
		}
		return (right &amp;&amp; left);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E8C\u53C9\u6811\u4E2D\u548C\u4E3A\u67D0\u4E00\u503C\u7684\u8DEF\u5F84<br> \u8F93\u5165\u4E00\u9897\u4E8C\u53C9\u6811\u548C\u4E00\u4E2A\u6574\u6570\uFF0C\u6253\u5370\u51FA\u4E8C\u53C9\u6811\u4E2D\u7ED3\u70B9\u503C\u7684\u548C\u4E3A\u8F93\u5165\u6574\u6570\u7684\u6240\u6709\u8DEF\u5F84\u3002\u4ECE\u6811\u7684\u6839\u8282\u70B9\u5F00\u59CB\u5F80\u4E0B\u4E00\u76F4\u5230\u53F6\u7ED3\u70B9\u6240\u7ECF\u8FC7\u7684\u6240\u6709\u7684\u7ED3\u70B9\u5F62\u6210\u4E00\u6761\u8DEF\u5F84\u3002<br> \u601D\u8DEF:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Problem25 {
    public static void main(String args[]) {
		BinaryTreeNode root1 = new BinaryTreeNode();
		BinaryTreeNode node1 = new BinaryTreeNode();
		BinaryTreeNode node2 = new BinaryTreeNode();
		BinaryTreeNode node3 = new BinaryTreeNode();
		BinaryTreeNode node4 = new BinaryTreeNode();
		root1.leftNode = node1;
		root1.rightNode = node2;
		node1.leftNode = node3;
		node1.rightNode = node4;
		root1.value = 10;
		node1.value = 5;
		node2.value = 12;
		node3.value = 4;
		node4.value = 7;
		Problem25 testFindPath = new Problem25();
		testFindPath.findPath(root1, 22);
	}

	public void findPath(BinaryTreeNode root, int sum) {
		if (root == null)
			return;
		Stack&lt;Integer&gt; stack = new Stack&lt;Integer&gt;();
		int currentSum = 0;
		findPath(root, sum, stack, currentSum);
	}

	private void findPath(BinaryTreeNode root, int sum, Stack&lt;Integer&gt; stack, int currentSum) {
		currentSum += root.value;
		stack.push(root.value);
		if (root.leftNode == null &amp;&amp; root.rightNode == null) {
			// \u5230\u8282\u70B9\u7684\u5C3E\u90E8\u4E86
			if (currentSum == sum) {
				for (int path : stack) {
					System.out.print(path + &quot; &quot;);
				}
				System.out.println();
			}
		}
		if (root.leftNode != null) {
			findPath(root.leftNode, sum, stack, currentSum);
		}
		if (root.rightNode != null) {
			findPath(root.rightNode, sum, stack, currentSum);
		}
		stack.pop();
	}
}

class BinaryTreeNode {
	public static int value;
	public BinaryTreeNode leftNode;
	public BinaryTreeNode rightNode;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u590D\u6742\u94FE\u8868\u7684\u590D\u5236<br> \u5B9E\u73B0\u51FD\u6570\u590D\u5236\u4E00\u4E2A\u590D\u6742\u94FE\u8868\u3002\u5728\u590D\u6742\u94FE\u8868\u4E2D,\u6BCF\u4E2A\u7ED3\u70B9\u9664\u4E86\u6709\u4E00\u4E2A next \u6307\u9488\u6307\u5411\u4E0B\u4E00\u4E2A\u7ED3\u70B9\u5916,\u8FD8\u6709\u4E00\u4E2A\u6307\u5411\u94FE\u8868\u4E2D\u4EFB\u610F\u7ED3\u70B9\u6216 null\u3002</p></li></ol><hr><ul><li>\u90AE\u7BB1 \uFF1Acharon.chui@gmail.com</li><li>Good Luck!</li></ul>`,5),r=[d];function s(a,v){return e(),i("div",null,r)}var c=n(l,[["render",s],["__file","\u5251\u6307Offer(\u4E0B).html.vue"]]);export{c as default};
